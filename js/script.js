const btn_menu = document.querySelector("#btn-menu");
const btn_close = document.querySelector("#btn-close");

const section = document.querySelectorAll('section');
const links = document.querySelectorAll('.nav-item .nav-link');
const navbar = document.querySelector('header');

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
                document.querySelector('.navbar-nav .nav-item a[href*='+ id +']').classList.add('active');
                document.querySelector(".navbar-collapse").classList.remove("collapse");
            });
        }

        if(top > nav){
            navbar.classList.add('fixed-top');
        }
        else {
            navbar.classList.remove('fixed-top');
        }

    });
};