document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.profissional-card');
    const container = document.querySelector('.profissionais');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Fecha outros cards
            cards.forEach(c => {
                if (c !== card && c.classList.contains('expanded')) {
                    c.classList.remove('expanded');
                }
            });

            // Alterna o estado do card clicado
            card.classList.toggle('expanded');

            // Atualiza o blur
            container.classList.toggle('blurred', card.classList.contains('expanded'));
        });
    });
});