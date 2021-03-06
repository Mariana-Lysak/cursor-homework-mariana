//1
const getMaxDigit= (number) => Math.max(...number.toString());


//2
function pow(x, n) {
    let result = x;

    for (let i = 1; i < n; i++) {
        result *= x;
    }

    return result
}


//3
const formatName = (name) => name[0].toUpperCase() + name.slice(1).toLowerCase();


//4
function getSalary(sum) {
    const tax = 19.5 / 100;
    const totalSalary = sum - (sum * tax);

    return totalSalary
}


//5
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);


//6
function countLetter (char, word) {
    let count = 0;

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i).toLowerCase() === char.toLowerCase()) count++;
    }

    return count
}


//7 
function calcCurrency (currency) {
    let currencyRate = 25;
    let upperCurrency = currency.toUpperCase();

    if (upperCurrency.endsWith('$')) {
        currency = parseInt(currency);

        return +currency*currencyRate;
    }

    if (upperCurrency.endsWith('UAH')) {
        currency = parseInt(currency);

        return currency/currencyRate;
    }

    console.error('Please, input only $ or UAH');

    }


//8
function getRandomPassword (len = 8) {
    let password = '';

    for (let i = 0; i < len; i++) {
        password += Math.floor(Math.random()*10);
    }

    return password
}

console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №1: ${getMaxDigit(582)}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №2: ${pow(4, 2)}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №3: ${formatName('maRcO')}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №4: ${getSalary(1000)}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №5: ${getRandomNumber (1, 8)}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №6: ${countLetter ('a', 'blablabla')}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №7: ${calcCurrency ('100UAh')}`);
console.log('%c%s', 'color: white; font: 1rem/1 Tahoma;',` Функція №8: ${getRandomPassword (4)}`);