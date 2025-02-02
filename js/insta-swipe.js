document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    let isDragging = false;
    let startX, scrollLeft;
  
    // Inicia o arrasto
    carrossel.addEventListener('mousedown', (e) => {
      isDragging = true;
      startX = e.pageX - carrossel.offsetLeft;
      scrollLeft = carrossel.scrollLeft;
    });
  
    // Durante o arrasto
    carrossel.addEventListener('mousemove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX - carrossel.offsetLeft;
      const walk = (x - startX) * 2; // Ajuste a sensibilidade do arrasto
      carrossel.scrollLeft = scrollLeft - walk;
    });
  
    // Finaliza o arrasto
    carrossel.addEventListener('mouseup', () => {
      isDragging = false;
    });
  
    carrossel.addEventListener('mouseleave', () => {
      isDragging = false;
    });
  
    // Suporte para toque em dispositivos móveis
    carrossel.addEventListener('touchstart', (e) => {
      isDragging = true;
      startX = e.touches[0].pageX - carrossel.offsetLeft;
      scrollLeft = carrossel.scrollLeft;
    });
  
    carrossel.addEventListener('touchmove', (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.touches[0].pageX - carrossel.offsetLeft;
      const walk = (x - startX) * 2; // Ajuste a sensibilidade do arrasto
      carrossel.scrollLeft = scrollLeft - walk;
    });
  
    carrossel.addEventListener('touchend', () => {
      isDragging = false;
    });
  });