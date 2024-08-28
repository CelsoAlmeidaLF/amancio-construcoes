
const btn_menu = document.querySelector("#btn-menu");
const btn_close = document.querySelector("#btn-close");
let currentIndex = 0;

btn_menu.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.add("collapse");
});

btn_close.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.remove("collapse");
});

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }

    const offset = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function prevSlide() {
    showSlide(currentIndex - 1);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 8000); // Muda de slide a cada 3 segundos
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentIndex);
    setTimeout(autoSlide, 3000); // Inicia o carrossel automático
});
