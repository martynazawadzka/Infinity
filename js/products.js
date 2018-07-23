"use strict"

function showPopup(imageUrl, itemText) {
    let popupElement = document.querySelector('.popup__content');
    popupElement.classList.add('popup__content_active');

    let popupImage = document.querySelector('.popup__img');
    popupImage.setAttribute('src', imageUrl);

    let popupText = document.querySelector('.popup__text');
    popupText.innerHTML = itemText;
}

function hidePopup() {
    let popupElement = document.querySelector('.popup__content');
    popupElement.classList.remove('popup__content_active');
}

document.addEventListener('DOMContentLoaded', function () {
    let closeButton = document.querySelector('.popup__close-button');
    closeButton.addEventListener('touchend', hidePopup);

    let itemList = document.querySelectorAll('.items__item');
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('touchend', function () {
            let imageUrl = this.querySelector('.items__img').getAttribute('src');

            let itemText = this.querySelector('.items__description').innerHTML;
            showPopup(imageUrl, itemText);
        });
    }
});




