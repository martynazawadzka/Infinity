function closeCookieBar() {
    let cookieElement = document.querySelector('.cookie-bar');
    cookieElement.classList.add('cookie-bar_hide');
    localStorage.setItem('cookie', 'true');
}

function checkCookie() {
    let cookieLocalStorage = localStorage.getItem('cookie');
    if (cookieLocalStorage) {
        closeCookieBar();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    checkCookie();
    let closeButton = document.querySelector('.cookie-bar__button');
    closeButton.addEventListener('click', closeCookieBar);
});