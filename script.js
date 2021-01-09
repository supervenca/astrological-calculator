"use strict";

window.addEventListener('DOMContentLoaded',() => {

    function zodiacSign() {
        let day = document.getElementById('day').value;
        let month = document.getElementById('month').value;
        let signIMG = document.getElementById('sign_logo-img');
        let result;
        let signSrc;

        if (day >= 20 && month == 1 || month == 2 && day <= 19) {
            result = 'Aquarius';
            signSrc = 'img/zodiac/aquarius-1.png';
        }
        if (day >= 19 && day <= 29 && month == 2 || month == 3 && day <= 20) {
            result = 'Pisces';
            signSrc = 'img/zodiac/pisces-1.png';
        }
        if (day >= 21 && month == 3 || month == 4 && day <= 19) {
            result = 'Aries';
            signSrc = 'img/zodiac/aries-1.png';
        }
        if (day >= 20 && day <= 30 && month == 4 || month == 5 && day <= 20) {
            result = 'Taurus';
            signSrc = 'img/zodiac/taurus-1.png';
        }
        if (day >= 21 && month == 5 || month == 6 && day <= 20) {
            result = 'Gemini';
            signSrc = 'img/zodiac/gemini-1.png';
        }
        if (day >= 21 && day <= 30 && month == 6 || month == 7 && day <= 22) {
            result = 'Cancer';
            signSrc = 'img/zodiac/cancer-1.png';
        }
        if (day >= 23 && month == 7 || month == 8 && day <= 22) {
            result = 'Leo';
            signSrc = 'img/zodiac/leo-1.png';
        }
        if (day >= 23 && month == 8 || month == 9 && day <= 22) {
            result = 'Virgo';
            signSrc = 'img/zodiac/virgo-1.png';
        }
        if (day >= 23 && day <= 30 && month == 9 || month == 10 && day <= 22) {
            result = 'Libra';
            signSrc = 'img/zodiac/libra-1.png';
        }
        if (day >= 23 && month == 10 || month == 11 && day <= 21) {
            result = 'Scorpio';
            signSrc = 'img/zodiac/scorpio-1.png';
        }
        if (day >= 22 && day <= 30 && month == 11 || month == 12 && day <= 21) {
            result = 'Sagittarius';
            signSrc = 'img/zodiac/sagittarius-1.png';
        }
        if (day >= 22 && month == 12 || month == 1 && day <= 19) {
            result = 'Capricorn';
            signSrc = 'img/zodiac/capricornus-1.png';
        }
        if (day >= 30 && month == 2) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (day >= 31 && month == 4) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (day >= 31 && month == 6) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (day >= 31 && month == 9) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (day >= 31 && month == 11) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (day > 31 || month > 12) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (!day || !month) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }
        if (day == 0 || month == 0) {
            result = 'OOPS! Invalid date';
            signSrc = '';
        }

        document.getElementById('sign_name').innerHTML = `<h1>${result}</h1>`;
        signIMG.setAttribute('src', signSrc);
    }

    function chineseSign() {
        let year = document.querySelector('#year').value;
        let chineseIMG = document.getElementById('chinese_logo-img');
        let result;
        let start = 1924;
        let x = (year - start) % 12;
        let chineseSrc;

        switch (x) {
            case 0:
                result = 'Rat';
                chineseSrc = 'img/chinese/mouse.png';
                break;
            case 1:
                result = 'Ox';
                chineseSrc = 'img/chinese/ox.png';
                break;
            case 2:
                result = 'Tiger';
                chineseSrc = 'img/chinese/tiger.png';
                break;
            case 3:
                result = 'Rabbit';
                chineseSrc = 'img/chinese/rabbit.png';
                break;
            case 4:
                result = 'Dragon';
                chineseSrc = 'img/chinese/dragon.png';
                break;
            case 5:
                result = 'Snake';
                chineseSrc = 'img/chinese/snake.png';
                break;
            case 6:
                result = 'Horse';
                chineseSrc = 'img/chinese/horse.png';
                break;
            case 7:
                result = 'Sheep';
                chineseSrc = 'img/chinese/goat.png';
                break;
            case 8:
                result = 'Monkey';
                chineseSrc = 'img/chinese/monkey.png';
                break;
            case 9:
                result = 'Rooster';
                chineseSrc = 'img/chinese/rooster.png';
                break;
            case 10:
                result = 'Dog';
                chineseSrc = 'img/chinese/dog.png';
                break;
            case 11:
                result = 'Pig';
                chineseSrc = 'img/chinese/pig.png';
                break;

            default:
                result = 'OOPS! Invalid year';
                chineseSrc = '';
                break;
        }

        document.querySelector('#chinese_name').innerHTML = `<h1>${result}</h1>`;
        chineseIMG.setAttribute('src', chineseSrc);
    }

    const zodiacButton = document.querySelector('#zodiac-button');
    const chineseButton = document.querySelector('#chinese-zodiac-button');

    zodiacButton.addEventListener('click', zodiacSign);

    chineseButton.addEventListener('click', chineseSign);
});