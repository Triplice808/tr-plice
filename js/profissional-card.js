document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.profissional-card');
    const container = document.querySelector('.profissionais');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            // Fecha todos os cards que estão abertos
            cards.forEach(c => {
                if (c !== card && c.classList.contains('expanded')) {
                    c.classList.remove('expanded');
                }
            });

            // Alterna a classe 'expanded' no card clicado
            card.classList.toggle('expanded');

            // Adiciona ou remove a classe 'blurred' no container
            if (card.classList.contains('expanded')) {
                container.classList.add('blurred');
            } else {
                container.classList.remove('blurred');
            }
        });
    });
});