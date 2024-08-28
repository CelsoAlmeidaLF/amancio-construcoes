
const btn_menu = document.querySelector("#btn-menu");
const btn_close = document.querySelector("#btn-close");
const section = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-item .nav-link');
const navbar = document.querySelector('header');

let currentIndex = 0;

btn_menu.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.add("collapse");
});

btn_close.addEventListener("click", () => {
    document.querySelector(".navbar-collapse").classList.remove("collapse");
});

window.onscroll = () => {
    section.forEach(s => {
        let top = window.scrollY;
        let offset = s.offsetTop - 150;
        let height = s.offsetHeight;
        let id = s.getAttribute('id');
        let nav = navbar.clientHeight * 1.5;
        
        if(top >= offset && top < offset + height) {
            links.forEach(link => {
                link.classList.remove('active');
                document.querySelector('.navlist .nav-item a[href*='+ id +']').classList.add('active');
                document.querySelector(".navbar-collapse").classList.remove("collapse");
            });
        }
    });
};

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
