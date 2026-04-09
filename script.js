// ==========================================
// CONFIGURAÇÃO DE TRADUÇÃO
// ==========================================
const translations = {
  pt: {
    // Barra de Tarefas
    "page-title": "Mario Barros",
    "start-btn": "Iniciar",
    "nav-about": "Sobre Mim",
    "nav-links": "Links",
    "nav-gallery": "Galeria",
    "nav-contact": "Contato",
    
    // Hero Section
    "hero-greeting": "Olá! 👋",
    "bio-name": "Meu nome é Mario Barros.",
    "bio-student": "Sou pós-graduando em Engenharia de Software pela",
    "bio-interest": "Tenho profundo interesse em tudo relacionado a tecnologia, desde aplicações self-hosted e cibersegurança até UX/UI e desenvolvimento de jogos.",
    "bio-games": "Sou especialmente apaixonado por desenvolvimento de jogos e tenho brincado com vários projetos pessoais ao longo dos anos em",
    
    // Trabalho
    "work-role": "Atualmente, trabalho como",
    "work-title": "Analista de Mídia Internacional",
    "work-company": "em uma agência de publicidade.",
    "work-purpose": "Nosso objetivo é conectar profissionais de mídia digital com equipes internacionais para entregar valor, eficiência, agilidade e qualidade em suas operações,",
    "work-tailored": "adaptadas aos desafios específicos de cada projeto e parceiro.",
    
    // Aprendizado
    "learning-intro": "Estou constantemente instigado para aprender e descobrir coisas novas. Especificamente, as principais áreas e ferramentas que estou focando para ganhar conhecimento mais profundo no momento são:",
    
    // Curiosidades
    "fun-facts-title": "Outras curiosidades:",
    "fact-games": "Adoro jogar videogames e estudar game design.",
    "fact-cats": "Tenho duas gatas: Poeira e Farinha!",
    "fact-cake": "Faço excelentes bolos. 🎂",
    
    // Sobre o Site
    "about-site-title": "Sobre o site",
    "about-site-desc": "Esta página está em construção e irá hospedar alguns dos meus projetos em andamento e aventuras de vida :)",
    
    // Contato
    "contact-title": "Contato",
    "contact-github": "GitHub",
    "contact-email": "E-mail",
    "contact-linkedin": "LinkedIn",
    
    // Rodapé
    "footer-copy": "© 2026 Mario Barros"
  },
  
  en: {
    // Barra de Tarefas
    "page-title": "Mario Barros",
    "start-btn": "Start",
    "nav-about": "About Me",
    "nav-links": "Links",
    "nav-gallery": "Gallery",
    "nav-contact": "Contact",
    
    // Hero Section
    "hero-greeting": "Hi there! 👋",
    "bio-name": "My name is Mario Barros.",
    "bio-student": "I'm a Software Engineering post-graduate student",
    "bio-interest": "I'm deeply interested in anything tech-related, from self-hosted applications and cybersecurity to UX/UI and game development.",
    "bio-games": "I am especially fond of game development and have been engaged in various small personal projects over the years in",
    
    // Trabalho
    "work-role": "Currently, I work as an",
    "work-title": "International Media Analyst",
    "work-company": "at a publicity agency.",
    "work-purpose": "Our purpose is to connect digital media professionals with international teams to deliver value, efficiency, agility, and quality in their operations,",
    "work-tailored": "tailored to the specific challenges of each project and partner.",
    
    // Aprendizado
    "learning-intro": "I'm constantly eager to learn and discover new things. Specifically, the main areas and tools I am focusing on to gain deeper knowledge at the moment are:",
    
    // Curiosidades
    "fun-facts-title": "Other fun facts:",
    "fact-games": "I love playing video games and studying game design.",
    "fact-cats": "I have two cats: Poeira and Farinha!",
    "fact-cake": "I make excellent cakes. 🎂",
    
    // Sobre o Site
    "about-site-title": "About the site",
    "about-site-desc": "This page is under construction and will host some of my working projects and life adventures :)",
    
    // Contato
    "contact-title": "Contact",
    "contact-github": "GitHub",
    "contact-email": "Email",
    "contact-linkedin": "LinkedIn",
    
    // Rodapé
    "footer-copy": "© 2026 Mario Barros"
  }
};

// Estado atual do idioma (começa em português)
let currentLang = 'pt';

// ==========================================
// FUNÇÕES DE TRADUÇÃO
// ==========================================

// Função para alternar o idioma
function toggleLanguage() {
  currentLang = currentLang === 'pt' ? 'en' : 'pt';
  applyTranslations();
  updateLanguageButton();
}

// Função que atualiza o texto na tela
function applyTranslations() {
  const elements = document.querySelectorAll('[data-lang]');
  
  elements.forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[currentLang][key]) {
      element.innerHTML = translations[currentLang][key];
    }
  });
}

// Função para atualizar o botão de idioma
function updateLanguageButton() {
  const flagSpan = document.getElementById('lang-flag');
  const textSpan = document.getElementById('lang-text');
  
  if (flagSpan && textSpan) {
    if (currentLang === 'pt') {
      flagSpan.textContent = '🇧🇷';
      textSpan.textContent = 'PT';
    } else {
      flagSpan.textContent = '🇺🇸';
      textSpan.textContent = 'EN';
    }
  }
}

// ==========================================
// RELÓGIO
// ==========================================

function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  
  const clockElement = document.getElementById('clock-time');
  if (clockElement) {
    clockElement.textContent = `${hours}:${minutes}:${seconds}`;
  }
}

// ==========================================
// INICIALIZAÇÃO
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateLanguageButton();
  updateClock();
  setInterval(updateClock, 1000);
});