// ==========================================
// CARREGADOR DE COMPONENTES (Header & Footer)
// ==========================================

async function loadComponent(elementId, filePath) {
  try {
    const response = await fetch(filePath);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const html = await response.text();
    document.getElementById(elementId).innerHTML = html;
  } catch (error) {
    console.error(`Erro ao carregar ${filePath}:`, error);
    // Fallback: mostra um aviso se falhar
    document.getElementById(elementId).innerHTML = '<p style="color:red; text-align:center;">Erro ao carregar menu.</p>';
  }
}

// Executa quando a página carrega
document.addEventListener('DOMContentLoaded', () => {
    
    loadComponent('header-placeholder', './header.html');
  
    // Carrega o Footer
    loadComponent('footer-placeholder', './footer.html');

    // Carrega o script.js (relógio e lógica) APÓS o header estar pronto
    // Usamos setTimeout pequeno para garantir que o DOM do header foi injetado
    setTimeout(() => {
        const script = document.createElement('script');
        script.src = './script.js';
        document.body.appendChild(script);
    }, 100);
});