const nav_list = document.querySelector(".navbar-list");
const nav_burger = document.querySelector(".navbar-burger");
const nav_burger_img = document.querySelector(".navbar-burger img");

nav_burger.onclick = () => {
    if (nav_list.classList.toggle('open')) {
        nav_burger_img.src = "./img/header/xmark-solid.svg";
    } else {
        nav_burger_img.src = "./img/header/bars-solid.svg";
    }
};