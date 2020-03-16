const navMenu = document.querySelector(".main-nav .menu");
const navItems = document.querySelectorAll(".main-nav .menu .item");

const navSlide = () => {
    // show the navigation bar
    navMenu.classList.toggle("nav-menu-show");
    // navigation items animation
    navItems.forEach((item, index) => {
        if (item.style.animation) {
            item.style.animation = '';
        } else {
            item.style.animation = `navItemFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
};

document.querySelector(".burger").addEventListener("click", navSlide);
document.querySelector(".close-nav").addEventListener("click", navSlide);