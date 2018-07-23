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
    let popup = document.querySelector('.products__popup');
    popup.addEventListener('click', hidePopup);


    let itemList = document.querySelectorAll('.items__item');
    for (let i = 0; i < itemList.length; i++) {
        itemList[i].addEventListener('click', function () {
            let imageUrl = this.querySelector('.items__img').getAttribute('src');
            let itemText = this.querySelector('.items__description').innerHTML;

            showPopup(imageUrl, itemText);
        });
    }
});




