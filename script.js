"use strict";

function zodiacSign() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let result;
    if (day >= 20 && month == 1 || month == 2 && day <=19) {
        result = 'Aquarius';
    }
    if (day >= 19 && month == 2 || month == 3 && day <=20) {
        result = 'Pisces';
    }
    if (day >= 21 && month == 3 || month == 4 && day <=19) {
        result = 'Aries';
    }
    if (day >= 20 && month == 4 || month == 5 && day <=20) {
        result = 'Taurus';
    }
    if (day >= 21 && month == 5 || month == 6 && day <=20) {
        result = 'Gemini';
    }
    if (day >= 21 && month == 6 || month == 7 && day <=22) {
        result = 'Cancer';
    }
    if (day >= 23 && month == 7 || month == 8 && day <=22) {
        result = 'Leo';
    }
    if (day >= 23 && month == 8 || month == 9 && day <=22) {
        result = 'Virgo';
    }
    if (day >= 23 && month == 9 || month == 10 && day <=22) {
        result = 'Libra';
    }
    if (day >= 23 && month == 10 || month == 11 && day <=21) {
        result = 'Scorpio';
    }
    if (day >= 22 && month == 11 || month == 12 && day <=21) {
        result = 'Sagittarius';
    }
    if (day >= 22 && month == 12 || month == 1 && day <=19) {
        result = 'Capricorn';
    }

    console.log(result);
}

function chineseSign() {
    let year = document.querySelector('#year').value;
    let result;
    let start = 1924;
    let x = (year - start) % 12;

    if (x == 0) {
        result = 'Rat'
    }
    if (x == 1) {
        result = 'Ox'
    }
    if (x == 2) {
        result = 'Tiger'
    }
    if (x == 3) {
        result = 'Rabbit'
    }
    if (x == 4) {
        result = 'Dragon'
    }
    if (x == 5) {
        result = 'Snake'
    }
    if (x == 6) {
        result = 'Horse'
    }
    if (x == 7) {
        result = 'Sheep'
    }
    if (x == 8) {
        result = 'Monkey'
    }
    if (x == 9) {
        result = 'Rooster'
    }
    if (x == 10) {
        result = 'Dog'
    }
    if (x == 11) {
        result = 'Pig'
    }

    console.log(result);
}

const zodiacButton = document.querySelector('#zodiac-button');
const chineseButton = document.querySelector('#chinese-zodiac-button')

zodiacButton.addEventListener('click', zodiacSign);

chineseButton.addEventListener('click',chineseSign);