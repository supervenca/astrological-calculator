"use strict";

function zodiacSign() {
    let day = document.getElementById('day').value;
    let month = document.getElementById('month').value;
    let result;
    let signLogo;

    if (day >= 20 && month == 1 || month == 2 && day <=19) {
        result = 'Aquarius';
        signLogo = 'aquarius-logo';
    }
    if (day >= 19 && day <=29 && month == 2 || month == 3 && day <=20) {
        result = 'Pisces';
        signLogo = 'pisces-logo';
    }
    if (day >= 21 && month == 3 || month == 4 && day <=19) {
        result = 'Aries';
        signLogo = 'aries-logo';
    }
    if (day >= 20 && day <=30 && month == 4 || month == 5 && day <=20) {
        result = 'Taurus';
        signLogo = 'taurus-logo';
    }
    if (day >= 21 && month == 5 || month == 6 && day <=20) {
        result = 'Gemini';
        signLogo = 'gemini-logo';
    }
    if (day >= 21 && day <=30 && month == 6 || month == 7 && day <=22) {
        result = 'Cancer';
        signLogo = 'cancer-logo';
    }
    if (day >= 23 && month == 7 || month == 8 && day <=22) {
        result = 'Leo';
        signLogo = 'leo-logo';
    }
    if (day >= 23 && month == 8 || month == 9 && day <=22) {
        result = 'Virgo';
        signLogo = 'virgo-logo';
    }
    if (day >= 23 && day <=30 && month == 9 || month == 10 && day <=22) {
        result = 'Libra';
        signLogo = 'libra-logo';
    }
    if (day >= 23 && month == 10 || month == 11 && day <=21) {
        result = 'Scorpio';
        signLogo = 'scorpio-logo';
    }
    if (day >= 22 && day <=30 && month == 11 || month == 12 && day <=21) {
        result = 'Sagittarius';
        signLogo = 'sagittarius-logo';
    }
    if (day >= 22 && month == 12 || month == 1 && day <=19) {
        result = 'Capricorn';
        signLogo = 'capricorn-logo';
    }
    if (day >= 30 && month == 2) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }
    if (day >= 31 && month == 4 ) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }
    if (day >= 31 && month == 6 ) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }
    if (day >= 31 && month == 9 ) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }
    if (day >= 31 && month == 11 ) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }
    if (day > 31 || month > 12) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }
    if (!day || !month) {
        result = 'OOPS! Invalid date';
        signLogo = 'hidden';
    }

    document.querySelector('#sign_name').innerHTML = `<h1>${result}</h1>`;
    document.querySelector('#sign_logo').classList.add(`${signLogo}`);
}

function chineseSign() {
    let year = document.querySelector('#year').value;
    let result;
    let start = 1924;
    let x = (year - start) % 12;
    let chineseLogo;

    if (x == 0) {
        result = 'Rat';
        chineseLogo = 'rat-logo';
    }
    if (x == 1) {
        result = 'Ox';
        chineseLogo = 'ox-logo';
    }
    if (x == 2) {
        result = 'Tiger';
        chineseLogo = 'tiger-logo';
    }
    if (x == 3) {
        result = 'Rabbit';
        chineseLogo = 'rabbit-logo';
    }
    if (x == 4) {
        result = 'Dragon';
        chineseLogo = 'dragon-logo';
    }
    if (x == 5) {
        result = 'Snake';
        chineseLogo = 'snake-logo';
    }
    if (x == 6) {
        result = 'Horse';
        chineseLogo = 'horse-logo';
    }
    if (x == 7) {
        result = 'Sheep';
        chineseLogo = 'sheep-logo';
    }
    if (x == 8) {
        result = 'Monkey';
        chineseLogo = 'monkey-logo';
    }
    if (x == 9) {
        result = 'Rooster';
        chineseLogo = 'rooster-logo';
    }
    if (x == 10) {
        result = 'Dog';
        chineseLogo = 'dog-logo';
    }
    if (x == 11) {
        result = 'Pig';
        chineseLogo = 'pig-logo';
    }
    if (year < 1924 || year > 2021) {
        result = 'OOPS! Invalid year';
        chineseLogo = 'hidden';
    }

    document.querySelector('#chinese_name').innerHTML = `<h1>${result}</h1>`;
    document.querySelector('#chinese_logo').classList.add(`${chineseLogo}`);
}

const zodiacButton = document.querySelector('#zodiac-button');
const chineseButton = document.querySelector('#chinese-zodiac-button')

zodiacButton.addEventListener('click', zodiacSign);

chineseButton.addEventListener('click',chineseSign);