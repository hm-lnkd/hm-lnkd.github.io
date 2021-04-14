//mobile hamburger icon
const burger = document.getElementById("burger");
const navbarMenu = document.getElementById("navbarBasicExample");

//event listener
burger.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});