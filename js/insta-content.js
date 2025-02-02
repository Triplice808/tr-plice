document.addEventListener('DOMContentLoaded', () => {
    const carrossel = document.querySelector('.carrossel');
    const items = document.querySelectorAll('.carrossel-item');
    let currentIndex = 0;

    document.querySelector('.next').addEventListener('click', () => {
        if (currentIndex < items.length - 1) {
            currentIndex++;
            updateCarrossel();
        }
    });

    document.querySelector('.prev').addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarrossel();
        }
    });

    function updateCarrossel() {
        const offset = -currentIndex * (items[0].offsetWidth + 20); // 20 = gap
        carrossel.style.transform = `translateX(${offset}px)`;
    }
});