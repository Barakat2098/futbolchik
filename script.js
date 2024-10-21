let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) {
        currentSlideIndex = 0;
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1;
    } else {
        currentSlideIndex = index;
    }

    // Показать активный слайд
    slides.forEach((slide, i) => {
        slide.style.display = i === currentSlideIndex ? 'block' : 'none';
    });

    // Обновить активное состояние точки
    dots.forEach((dot, i) => {
        dot.className = i === currentSlideIndex ? 'dot active' : 'dot';
    });
}

function changeSlide(direction) {
    showSlide(currentSlideIndex + direction);
}

function currentSlide(index) {
    showSlide(index - 1);
}

// Инициализация слайдера
showSlide(currentSlideIndex);

// Автопрокрутка
setInterval(() => {
    changeSlide(1);
}, 5000);