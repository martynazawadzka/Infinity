function showMenu() {
    let navElement = document.querySelector('.nav');
    navElement.classList.add('nav_overlay');
}

function hideMenu() {
    let navElement = document.querySelector('.nav');
    navElement.classList.remove('nav_overlay');
}

document.addEventListener('DOMContentLoaded', function () {
    let closeElement = document.querySelector('.nav__close-button');
    closeElement.addEventListener('click', hideMenu);

    let menuElement = document.querySelector('.nav__menu');
    menuElement.addEventListener('click', showMenu);

    let menuItems = document.querySelectorAll('.nav__item');
    menuItems.forEach(element => {
        element.addEventListener('click', hideMenu);
    });
})