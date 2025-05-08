window.addEventListener('scroll', function() {
    const header = document.getElementById('meuHeader');
    if (window.scrollY > 20) { // Defina a distância de rolagem (em pixels) para ativar a mudança
      header.classList.add('scroll');
    } else {
      header.classList.remove('scroll');
    }
  });