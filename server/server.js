require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { Resend } = require('resend');

const app = express();
const PORT = process.env.PORT || 3001;

// --- Validación básica de configuración al arrancar ---
const requiredEnvVars = ['ADMIN_USERNAME', 'ADMIN_PASSWORD_HASH', 'JWT_SECRET'];
const missing = requiredEnvVars.filter((key) => !process.env[key]);
if (missing.length) {
  console.error(`Faltan variables de entorno obligatorias: ${missing.join(', ')}`);
  console.error('Copia server/.env.example como server/.env y complétalo.');
  process.exit(1);
}

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// --- Middlewares ---
const allowedOrigins = (process.env.CORS_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(helmet());

app.use(
  cors({
    origin(origin, callback) {
      // Permite peticiones sin origin (curl, apps móviles) y las de la whitelist
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Origen no permitido por CORS'));
      }
    },
  })
);
app.use(express.json());

// Rate limit muy simple en memoria para evitar spam/fuerza bruta
// (para producción real conviene usar algo como express-rate-limit + Redis)
const attempts = new Map();
function simpleRateLimit(key, maxAttempts, windowMs) {
  const now = Date.now();
  const record = attempts.get(key) || { count: 0, resetAt: now + windowMs };
  if (now > record.resetAt) {
    record.count = 0;
    record.resetAt = now + windowMs;
  }
  record.count += 1;
  attempts.set(key, record);
  return record.count <= maxAttempts;
}

// --- Middleware de autenticación JWT ---
function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido o expirado' });
  }
}

// --- Rutas ---
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

// Login de administrador: valida usuario + contraseña (hasheada) y entrega un JWT
app.post('/api/admin/login', async (req, res) => {
  const ip = req.ip;
  if (!simpleRateLimit(`login:${ip}`, 5, 60_000)) {
    return res.status(429).json({ error: 'Demasiados intentos. Intenta de nuevo en un minuto.' });
  }

  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: 'Usuario y contraseña son obligatorios' });
  }

  const validUsername = username === process.env.ADMIN_USERNAME;
  const validPassword = await bcrypt.compare(password, process.env.ADMIN_PASSWORD_HASH);

  if (!validUsername || !validPassword) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = jwt.sign({ role: 'admin', username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || '2h',
  });

  res.json({ token });
});

// Ruta protegida de ejemplo: el frontend la usa para confirmar que el token sigue vigente
app.get('/api/admin/verify', requireAuth, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// Formulario de contacto: envía un correo real usando Resend
app.post('/api/contact', async (req, res) => {
  const ip = req.ip;
  if (!simpleRateLimit(`contact:${ip}`, 5, 60_000)) {
    return res.status(429).json({ error: 'Demasiadas solicitudes. Intenta de nuevo en un minuto.' });
  }

  const { nombre, email, tipo, mensaje } = req.body || {};

  if (!nombre || !email || !tipo || !mensaje) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios' });
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    return res.status(400).json({ error: 'Email inválido' });
  }

  if (!resend) {
    console.warn('RESEND_API_KEY no configurada: el correo no se enviará realmente.');
    console.log('Contacto recibido (modo simulación):', { nombre, email, tipo, mensaje });
    return res.json({ ok: true, simulated: true });
  }

  try {
    await resend.emails.send({
      from: process.env.CONTACT_FROM_EMAIL,
      to: process.env.CONTACT_TO_EMAIL,
      reply_to: email,
      subject: `Nueva solicitud de proyecto: ${tipo}`,
      text: `Nombre: ${nombre}\nEmail: ${email}\nTipo de proyecto: ${tipo}\n\nMensaje:\n${mensaje}`,
    });
    res.json({ ok: true });
  } catch (error) {
    console.error('Error enviando correo con Resend:', error);
    res.status(502).json({ error: 'No se pudo enviar el mensaje, intenta más tarde.' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor Danketic escuchando en http://localhost:${PORT}`);
});
