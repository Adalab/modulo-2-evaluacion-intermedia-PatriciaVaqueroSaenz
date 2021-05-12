'use strict';

const button = document.querySelector('.js-button');
const inputNumber = document.querySelector('.js-inputNumber');
const counter = document.querySelector('.js-try');
const text = document.querySelector('.js-text');
const randomNumber = getRandomNumber(100);


function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
  }

function handleClickButton(){
    //comprobar numero
    //aumentar contador
}

console.log('Random number: ' + randomNumber);

button.addEventListener('click',handleClickButton);