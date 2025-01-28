document.getElementById('mobile-menu').addEventListener('click', function () {
    const navMenu = document.getElementById('nav-menu');
    const mobileMenu = document.getElementById('mobile-menu');

    navMenu.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Seleciona todos os itens do menu
const menuItems = document.querySelectorAll('#nav-menu a');

// Adiciona um evento de clique a cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        const navMenu = document.getElementById('nav-menu');
        const mobileMenu = document.getElementById('mobile-menu');

        // Fecha o menu
        navMenu.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});