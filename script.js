const STORAGE_KEY = 'danketic-projects';
const ADMIN_USERNAME = 'danketic';
const ADMIN_PASSWORD = 'danketic2026';

const translations = {
  en: {
    'nav.services': 'Services',
    'nav.portfolio': 'Portfolio',
    'nav.process': 'Process',
    'nav.contact': 'Contact',
    'nav.cta': 'Request a quote',
    'hero.eyebrow': 'Custom development',
    'hero.title': 'Digital solutions that power your business with clarity and scale.',
    'hero.lead': 'Danketic creates custom websites, inventory systems and software for brands and businesses that want to operate with more efficiency, better experience and real growth.',
    'hero.primaryCta': 'View projects',
    'hero.secondaryCta': 'Let\'s talk',
    'hero.statProjects': 'projects',
    'hero.statCustom': 'custom',
    'hero.statSupport': 'support',
    'hero.metricSales': 'Sales',
    'hero.metricTime': 'Time',
    'services.eyebrow': 'Services',
    'services.title': 'Digital solutions for every stage of your business',
    'service.web.title': 'Websites',
    'service.web.text': 'Modern and fast sites with attractive design to attract clients and strengthen your online presence.',
    'service.web.li1': 'Landing pages',
    'service.web.li2': 'Digital catalogs',
    'service.web.li3': 'E-commerce',
    'service.inventory.title': 'Inventory',
    'service.inventory.text': 'Systems to control entries, exits, products and reports in real time to optimize your operation.',
    'service.inventory.li1': 'Stock control',
    'service.inventory.li2': 'Reports and alerts',
    'service.inventory.li3': 'Supplier management',
    'service.software.title': 'Software',
    'service.software.text': 'Custom tools to automate processes, improve productivity and reduce operational errors.',
    'service.software.li1': 'Dashboards',
    'service.software.li2': 'CRM',
    'service.software.li3': 'Automation',
    'portfolio.eyebrow': 'Portfolio',
    'portfolio.title': 'Dashboards and solutions already working',
    'process.eyebrow': 'Process',
    'process.title': 'Clear, professional work focused on results',
    'process.step1.title': 'Diagnosis',
    'process.step1.text': 'We analyze your business, goals and the processes you want to improve.',
    'process.step2.title': 'Design',
    'process.step2.text': 'We define a visual and functional strategy aligned with your brand and audience.',
    'process.step3.title': 'Development',
    'process.step3.text': 'We build the solution using modern and maintainable technologies.',
    'process.step4.title': 'Delivery',
    'process.step4.text': 'We deliver the solution, train your team and support continuous improvement.',
    'testimonial.text': '“We launched a modern and functional website that helped us capture more clients and better organize business information.”',
    'testimonial.author': '— Services company',
    'footer.text': 'We develop digital solutions for companies and businesses that want to grow with intelligent technology.',
    'contact.title': 'Request your project',
    'contact.name': 'Your name',
    'contact.email': 'Email address',
    'contact.projectType': 'Project type',
    'contact.optionEcommerceDash': 'E-commerce Dashboard',
    'contact.optionInventorySystem': 'Inventory Management System',
    'contact.optionFinancialDash': 'Financial Dashboard',
    'contact.optionAnalytics': 'Analytics Platform',
    'contact.optionCRM': 'CRM System',
    'contact.optionWebApp': 'Custom Web Application',
    'contact.optionMobile': 'Mobile Application',
    'contact.optionOther': 'Other',
    'contact.message': 'Tell us what you need...',
    'contact.submit': 'Send request',
    'project.optionEqual': 'I want a page like this',
    'project.optionAdjust': 'I want to change things',
    'project.selectionLabel': 'Selection:',
    'project.cta': 'Request this project',
    'admin.title': 'Admin panel',
    'admin.username': 'Username',
    'admin.usernamePlaceholder': 'Type your username',
    'admin.password': 'Password',
    'admin.passwordPlaceholder': 'Type your password',
    'admin.login': 'Enter',
    'admin.projectName': 'Project name',
    'admin.projectNamePlaceholder': 'Example: Shopify Dashboard',
    'admin.category': 'Category',
    'admin.categoryPlaceholder': 'Example: Ecommerce / Inventory',
    'admin.description': 'Description',
    'admin.descriptionPlaceholder': 'Describe the project...',
    'admin.file': 'JPG / PNG file',
    'admin.saveProject': 'Save project',
    'admin.reset': 'Reset'
  },
  es: {
    'nav.services': 'Servicios',
    'nav.portfolio': 'Portafolio',
    'nav.process': 'Proceso',
    'nav.contact': 'Contacto',
    'nav.cta': 'Solicitar presupuesto',
    'hero.eyebrow': 'Desarrollo a medida',
    'hero.title': 'Soluciones digitales que impulsan tu negocio con claridad y escala.',
    'hero.lead': 'Danketic crea páginas web, sistemas de inventario y software a medida para marcas y empresas que quieren operar con más eficiencia, mejor experiencia y crecimiento real.',
    'hero.primaryCta': 'Ver proyectos',
    'hero.secondaryCta': 'Hablemos',
    'hero.statProjects': 'proyectos',
    'hero.statCustom': 'a medida',
    'hero.statSupport': 'soporte',
    'hero.metricSales': 'Ventas',
    'hero.metricTime': 'Tiempo',
    'services.eyebrow': 'Servicios',
    'services.title': 'Soluciones digitales para cada etapa de tu negocio',
    'service.web.title': 'Páginas web',
    'service.web.text': 'Sitios modernos y rápidos con un diseño atractivo para captar clientes y fortalecer tu presencia online.',
    'service.web.li1': 'Landing pages',
    'service.web.li2': 'Catálogos digitales',
    'service.web.li3': 'E-commerce',
    'service.inventory.title': 'Inventarios',
    'service.inventory.text': 'Sistemas para controlar entradas, salidas, productos y reportes en tiempo real para optimizar tu operación.',
    'service.inventory.li1': 'Control de stock',
    'service.inventory.li2': 'Reportes y alertas',
    'service.inventory.li3': 'Gestión de proveedores',
    'service.software.title': 'Software',
    'service.software.text': 'Herramientas personalizadas para automatizar procesos, mejorar la productividad y reducir errores operativos.',
    'service.software.li1': 'Dashboards',
    'service.software.li2': 'CRM',
    'service.software.li3': 'Automatización',
    'portfolio.eyebrow': 'Portafolio',
    'portfolio.title': 'Dashboards y soluciones que ya están funcionando',
    'process.eyebrow': 'Proceso',
    'process.title': 'Trabajo claro, profesional y enfocado en resultados',
    'process.step1.title': 'Diagnóstico',
    'process.step1.text': 'Analizamos tu negocio, tus metas y los procesos que quieres mejorar.',
    'process.step2.title': 'Diseño',
    'process.step2.text': 'Definimos una estrategia visual y funcional acorde a tu marca y público.',
    'process.step3.title': 'Desarrollo',
    'process.step3.text': 'Construimos la solución con tecnologías modernas y mantenibles.',
    'process.step4.title': 'Entrega',
    'process.step4.text': 'Entregamos la solución, capacitamos a tu equipo y apoyamos la mejora continua.',
    'testimonial.text': '“Logramos una web moderna y funcional que nos ayudó a captar más clientes y organizar mejor la información de nuestro negocio.”',
    'testimonial.author': '— Empresa de servicios',
    'footer.text': 'Desarrollamos soluciones digitales para empresas y negocios que quieren crecer con tecnología inteligente.',
    'contact.title': 'Solicita tu proyecto',
    'contact.name': 'Tu nombre',
    'contact.email': 'Correo electrónico',
    'contact.projectType': 'Tipo de proyecto',
    'contact.optionEcommerceDash': 'Dashboard E-commerce',
    'contact.optionInventorySystem': 'Sistema de Gestión de Inventario',
    'contact.optionFinancialDash': 'Dashboard Financiero',
    'contact.optionAnalytics': 'Plataforma de Análitica',
    'contact.optionCRM': 'Sistema CRM',
    'contact.optionWebApp': 'Aplicación Web Personalizada',
    'contact.optionMobile': 'Aplicación Móvil',
    'contact.optionOther': 'Otro',
    'contact.message': 'Cuéntanos qué necesitas...',
    'contact.submit': 'Enviar solicitud',
    'project.optionEqual': 'Quiero una página igual',
    'project.optionAdjust': 'Quiero cambiar cosas',
    'project.selectionLabel': 'Selección:',
    'project.cta': 'Solicitar este proyecto',
    'admin.title': 'Panel de administrador',
    'admin.username': 'Usuario',
    'admin.usernamePlaceholder': 'Escribe tu usuario',
    'admin.password': 'Contraseña',
    'admin.passwordPlaceholder': 'Escribe tu contraseña',
    'admin.login': 'Entrar',
    'admin.projectName': 'Nombre del proyecto',
    'admin.projectNamePlaceholder': 'Ej. Dashboard de Shopify',
    'admin.category': 'Categoría',
    'admin.categoryPlaceholder': 'Ej. Ecommerce / Inventario',
    'admin.description': 'Descripción',
    'admin.descriptionPlaceholder': 'Describe el proyecto...',
    'admin.file': 'Archivo JPG / PNG',
    'admin.saveProject': 'Guardar proyecto',
    'admin.reset': 'Restablecer'
  }
};

const defaultProjects = [
  {
    id: 1,
    title: 'Ecommerce Dashboard',
    category: 'Ecommerce',
    description: 'A panel to visualize sales, products, customers and KPIs for a digital business.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  },
  {
    id: 2,
    title: 'Inventory System',
    category: 'Inventory',
    description: 'Stock control, movements, suppliers and alerts for daily operations.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  },
  {
    id: 3,
    title: 'Commercial CRM',
    category: 'Software',
    description: 'Follow-up for customers, tasks and sales pipelines for business teams.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  },
  {
    id: 4,
    title: 'Financial Dashboard',
    category: 'Finance',
    description: 'Monitoring of income, expenses, collections and key business metrics.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1000&q=80',
    option: 'igual'
  }
];

const form = document.getElementById('contactForm');
const message = document.getElementById('form-message');
const dashboardRail = document.getElementById('dashboardRail');
const detailImage = document.getElementById('detailImage');
const detailTitle = document.getElementById('detailTitle');
const detailCategory = document.getElementById('detailCategory');
const detailDescription = document.getElementById('detailDescription');
const selectionText = document.getElementById('selectionText');
const detailCta = document.getElementById('detailCta');
const adminModal = document.getElementById('adminModal');
const openAdminButton = document.getElementById('openAdmin');
const closeAdminButton = document.getElementById('closeAdmin');
const adminLoginForm = document.getElementById('adminLoginForm');
const adminForm = document.getElementById('adminForm');
const resetProjectsButton = document.getElementById('resetProjects');
const adminUsernameInput = document.getElementById('adminUsername');
const adminPasswordInput = document.getElementById('adminPassword');
const adminMessage = document.getElementById('adminMessage');
const projectTitleInput = document.getElementById('projectTitle');
const projectCategoryInput = document.getElementById('projectCategory');
const projectDescriptionInput = document.getElementById('projectDescription');
const projectImageInput = document.getElementById('projectImage');

let projectList = JSON.parse(localStorage.getItem(STORAGE_KEY)) || defaultProjects;
let activeProject = projectList[0];
let selectedChoice = 'igual';
let carouselIndex = 0;
let currentLang = 'en';

function saveProjects(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  projectList = data;
  renderProjects();
  updateDetail(projectList[0]);
}

function getChoiceLabel(code) {
  const map = {
    igual: translations[currentLang]['project.optionEqual'],
    cambiar: translations[currentLang]['project.optionAdjust']
  };

  return map[code] || translations[currentLang]['project.optionEqual'];
}

function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  document.querySelectorAll('.lang-btn').forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === lang);
  });

  if (selectionText) {
    selectionText.textContent = getChoiceLabel(selectedChoice);
  }

  if (detailTitle && activeProject) {
    detailTitle.textContent = activeProject.title;
  }
}

function updateDetail(project) {
  activeProject = project;

  if (!project) return;

  detailImage.src = project.image;
  detailTitle.textContent = project.title;
  detailCategory.textContent = project.category;
  detailDescription.textContent = project.description;
  selectionText.textContent = getChoiceLabel(selectedChoice);
  detailCta.href = `#contacto?project=${encodeURIComponent(project.title)}&option=${selectedChoice}`;
}

function renderProjects() {
  if (!dashboardRail) return;

  const items = [...projectList, ...projectList];
  dashboardRail.innerHTML = items
    .map(
      (project, index) => `
        <button
          class="dashboard-item"
          type="button"
          data-index="${index % projectList.length}"
          aria-label="View project ${project.title}"
        >
          <img src="${project.image}" alt="${project.title}" />
          <span class="dashboard-item-overlay">
            <strong>${project.title}</strong>
            <small>${project.category}</small>
          </span>
        </button>
      `
    )
    .join('');

  const cards = dashboardRail.querySelectorAll('.dashboard-item');
  cards.forEach((button) => {
    button.addEventListener('click', () => {
      const index = Number(button.dataset.index);
      const project = projectList[index];
      updateDetail(project);
      document.getElementById('detalle-proyecto').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  const firstItem = dashboardRail.querySelector('.dashboard-item');

  if (firstItem) {
    const moveWidth = firstItem.getBoundingClientRect().width + 18;
    dashboardRail.style.transform = 'translateX(0px)';
    carouselIndex = 0;
    window.clearInterval(window.danketicCarouselTimer);
    window.danketicCarouselTimer = window.setInterval(() => {
      carouselIndex += 1;
      dashboardRail.style.transition = 'transform 0.7s ease';
      dashboardRail.style.transform = `translateX(-${moveWidth * carouselIndex}px)`;

      if (carouselIndex >= projectList.length) {
        window.setTimeout(() => {
          carouselIndex = 0;
          dashboardRail.style.transition = 'none';
          dashboardRail.style.transform = 'translateX(0px)';
        }, 700);
      }
    }, 3000);
  }
}

if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const nombre = formData.get('nombre')?.toString().trim() || 'Client';
    const tipo = formData.get('tipo')?.toString() || 'project';

    message.textContent = `Thanks ${nombre}, your request for ${tipo} was sent. We will contact you soon.`;
    message.style.color = '#7ee7c8';
    form.reset();
  });
}

function openAdmin() {
  adminModal.classList.remove('hidden');
  adminModal.setAttribute('aria-hidden', 'false');
  adminLoginForm.classList.remove('hidden');
  adminForm.classList.add('hidden');
  adminMessage.textContent = '';
  adminLoginForm.reset();
  adminUsernameInput.focus();
}

function closeAdmin() {
  adminModal.classList.add('hidden');
  adminModal.setAttribute('aria-hidden', 'true');
  adminLoginForm.classList.remove('hidden');
  adminForm.classList.add('hidden');
  adminLoginForm.reset();
  adminForm.reset();
  adminMessage.textContent = '';
}

if (openAdminButton) {
  openAdminButton.addEventListener('click', openAdmin);
}

if (closeAdminButton) {
  closeAdminButton.addEventListener('click', closeAdmin);
}

if (adminModal) {
  adminModal.addEventListener('click', (event) => {
    if (event.target === adminModal) {
      closeAdmin();
    }
  });
}

if (adminLoginForm) {
  adminLoginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const username = adminUsernameInput.value.trim();
    const password = adminPasswordInput.value.trim();

    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      adminMessage.textContent = '';
      adminLoginForm.classList.add('hidden');
      adminForm.classList.remove('hidden');
      projectTitleInput.focus();
    } else {
      adminMessage.textContent = 'Invalid username or password.';
      adminMessage.style.color = '#fca5a5';
      adminUsernameInput.focus();
    }
  });
}

if (adminForm) {
  adminForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const file = projectImageInput.files && projectImageInput.files[0];
    const title = projectTitleInput.value.trim();
    const category = projectCategoryInput.value.trim();
    const description = projectDescriptionInput.value.trim();

    if (!file || !title || !category || !description) {
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const newProject = {
        id: Date.now(),
        title,
        category,
        description,
        image: reader.result,
        option: 'igual'
      };

      const updatedProjects = [newProject, ...projectList];
      saveProjects(updatedProjects);
      adminForm.reset();
      closeAdmin();
    };

    reader.readAsDataURL(file);
  });
}

if (resetProjectsButton) {
  resetProjectsButton.addEventListener('click', () => {
    saveProjects(defaultProjects);
    adminForm.reset();
    closeAdmin();
  });
}

document.querySelectorAll('.choice-btn').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.choice-btn').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    selectedChoice = button.dataset.choice;
    selectionText.textContent = getChoiceLabel(selectedChoice);
    if (activeProject) {
      detailCta.href = `#contacto?project=${encodeURIComponent(activeProject.title)}&option=${selectedChoice}`;
    }
  });
});

document.querySelectorAll('.lang-btn').forEach((button) => {
  button.addEventListener('click', () => {
    setLanguage(button.dataset.lang);
  });
});

if (dashboardRail) {
  renderProjects();
  updateDetail(projectList[0]);
  setLanguage('en');
}
