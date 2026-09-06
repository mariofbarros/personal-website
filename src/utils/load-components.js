// ==========================================
// CARREGADOR DE COMPONENTES (Header & Footer)
// ==========================================

async function loadComponent(elementId, filePath) {
  const target = document.getElementById(elementId);
  if (!target) return;

  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    target.innerHTML = await response.text();
  } catch (error) {
    console.error(`Erro ao carregar ${filePath}:`, error);
    target.innerHTML = '<p style="color:red; text-align:center;">Erro ao carregar menu.</p>';
  }

  if (elementId === 'header-placeholder') {
    markActiveNavItem();
  }
}

// Marca o .nav-item cujo link aponta para a página atual
function markActiveNavItem() {
  document.querySelectorAll('.nav-item').forEach((link) => {
    if (link.pathname === window.location.pathname) {
      link.classList.add('active');
    }
  });
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
  const headerSrc = window.HEADER_SRC || '/src/components/headers/default.html';
  loadComponent('header-placeholder', headerSrc);
  loadComponent('footer-placeholder', '/src/components/footer.html');
});
