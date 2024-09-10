
const btn_menu = document.querySelector("#btn-menu");
const btn_close = document.querySelector("#btn-close");
const bnt_voltar = document.querySelector('.btn-voltar');
const section = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-item .nav-link');
const navbar = document.querySelector('header .navbar');

let currentIndex = 0;
let pageIndex = 0;

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
        if(height > height-top){
            navbar.classList.add('active');
        }
        else {
            navbar.classList.remove('active');
        }

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

function _showSlide(index) {
    const slides = document.querySelectorAll('.galeria-item');
    const totalSlides = slides.length;

    if (index >= totalSlides) {
        pageIndex = 0;
    } else if (index < 0) {
        pageIndex = totalSlides - 1;
    } else {
        pageIndex = index;
    }

    const offset = -pageIndex * 100;
    document.querySelector('.galeria-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    _showSlide(pageIndex + 1);
}

function prevSlide() {
    _showSlide(pageIndex - 1);
}

function showSlide(index) {
    _showSlide(index-1);
}

function openSlideshow(src) {
    document.getElementById('slideshow-img').src = src;
    document.getElementById('slideshow').style.display = 'flex';
}

function closeSlideshow() {
    document.getElementById('slideshow').style.display = 'none';
}