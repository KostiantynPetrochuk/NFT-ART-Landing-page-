'use strict'
let btn = document.querySelector('.header__burger-btn');
let firstMenuPart = document.querySelector('.header__nav');
let secondMenuPart = document.querySelector('.header__search-iner');
let thirdMenuPart = document.querySelector('.burger-field');
btn.addEventListener('click', function() {
    if (btn.classList.contains('opened')) {
        btn.classList.remove('opened');
    } else {
        btn.classList.add('opened');
    }
    if (firstMenuPart.classList.contains('show-menu')) {
        firstMenuPart.classList.remove('show-menu');
        secondMenuPart.classList.remove('show-menu');
        thirdMenuPart.classList.remove('show-menu');
    } else {
        firstMenuPart.classList.add('show-menu');
        secondMenuPart.classList.add('show-menu');
        thirdMenuPart.classList.add('show-menu');
    }
})
let footerButton1 = document.getElementById('footer-title-btn1');
let footerButton2 = document.getElementById('footer-title-btn2');
let footerButton3 = document.getElementById('footer-title-btn3');
let footerList1 = document.getElementById('footer-title-list1');
let footerList2 = document.getElementById('footer-title-list2');
let footerList3 = document.getElementById('footer-title-list3');
let footerArrow1 = document.getElementById('footer-title-arrow1');
let footerArrow2 = document.getElementById('footer-title-arrow2');
let footerArrow3 = document.getElementById('footer-title-arrow3');
footerButton1.addEventListener('click', function() {
    console.log('click');
    if (footerList1.classList.contains('change-height')) {
        footerList1.classList.remove('change-height');
        footerArrow1.classList.remove('rotate');
    } else {
        footerList1.classList.add('change-height');
        footerArrow1.classList.add('rotate');
    }
})
footerButton2.addEventListener('click', function() {
    console.log('click');
    if (footerList2.classList.contains('change-height')) {
        footerList2.classList.remove('change-height');
        footerArrow2.classList.remove('rotate');
    } else {
        footerList2.classList.add('change-height');
        footerArrow2.classList.add('rotate');
    }
})
footerButton3.addEventListener('click', function() {
    console.log('click');
    if (footerList3.classList.contains('change-height')) {
        footerList3.classList.remove('change-height');
        footerArrow3.classList.remove('rotate');
    } else {
        footerList3.classList.add('change-height');
        footerArrow3.classList.add('rotate');
    }
})