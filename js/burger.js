function openBurgerMenu() {
    let openIcon = document.getElementById("burger-menu-icon");
    let burgerMenu = document.getElementById("burger-menu");

    openIcon.classList.toggle('open-menu');
    burgerMenu.classList.toggle('open-menu');
    document.body.classList.toggle('fixed-page');
}