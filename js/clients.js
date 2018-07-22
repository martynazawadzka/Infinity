"use strict"

function nextSlide() {
    let slidesNumber = document.querySelectorAll('.slider__slide').length;
    let activeSlide = document.querySelector('.slider__slide_active');
    let activeSlideId = parseInt(activeSlide.dataset.slideid);

    if (activeSlideId > slidesNumber - 1) {
        activeSlideId = 0;
    }
    changeSlide(activeSlideId + 1);
}

function prevSlide() {
    let slidesNumber = document.querySelectorAll('.slider__slide').length;
    let activeSlide = document.querySelector('.slider__slide_active');
    let activeSlideId = parseInt(activeSlide.dataset.slideid);

    if (activeSlideId == 1) {
        activeSlideId = slidesNumber + 1;
    }
    changeSlide(activeSlideId - 1);
}

function changeSlide(newSlideId) {
    let activeSlide = document.querySelector('.slider__slide_active');
    activeSlide.classList.remove('slider__slide_active');

    let newSlide = document.querySelector('[data-slideid = "' + newSlideId + '"]');
    newSlide.classList.add('slider__slide_active');

    let activePin = document.querySelector('.pins__pin_active');
    activePin.classList.remove('pins__pin_active');

    let newPin = document.querySelector('[data-pinid = "' + newSlideId + '"]');
    newPin.classList.add('pins__pin_active');
}

function pinClick() {
    let pinsNumber = document.querySelectorAll('.pins__pin').length;

    for (let i = 1; i <= pinsNumber; i++) {
        let pin = document.querySelector('[data-pinid = "' + i + '"]');
        pin.addEventListener('click', function () {
            changeSlide(i);
            clearInterval(interval);
            interval = setInterval(nextSlide, 3000);
        });
    }
}

function addEventsForMobile() {
    let slidesList = document.querySelectorAll('.slider__slide');

    for (let i = 0; i < slidesList.length; i++) {

        slidesList[i].addEventListener('touchstart', function (event) {
            let startTouch = event.changedTouches[0].pageX;
            touchDirection = startTouch;
        });

        slidesList[i].addEventListener('touchend', function (event) {
            let endTouch = event.changedTouches[0].pageX;
            touchDirection -= endTouch;

            if (touchDirection > 0) {
                nextSlide();
                clearInterval(interval);
                interval = setInterval(nextSlide, 3000);
            } else if (touchDirection < 0) {
                prevSlide();
                clearInterval(interval);
                interval = setInterval(nextSlide, 3000);
            }
        });
    }
}

var interval = setInterval(nextSlide, 3000);
var touchDirection;

document.addEventListener('DOMContentLoaded', function () {
    pinClick();
    addEventsForMobile();
});