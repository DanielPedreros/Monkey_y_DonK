const bcrypt = require('bcryptjs');

const password = process.argv[2];

if (!password) {
  console.log('Uso: node hash-password.js "tu-contraseña"');
  process.exit(1);
}

const hash = bcrypt.hashSync(password, 10);
console.log('\nCopia esta línea completa dentro de tu archivo .env:\n');
console.log(`ADMIN_PASSWORD_HASH=${hash}\n`);
