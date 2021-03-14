//1 
const getRandomArray = (length, min, max) => [...new Array(length)]
.map(() => Math.round(Math.random()*(max - min + 1) )+ min);

console.log('Random Array:', getRandomArray(15, 1, 100));


//3 
const getAverage = (...numbers) =>
numbers.filter(number => Number.isInteger(number)).reduce((accumulatedValue, element) => accumulatedValue + element) /
numbers.length;

console.log('Average number:', getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


//5 
const filterEvenNumbers = (...numbers) =>
numbers.filter((number) => number % 2 != 0);

console.log('Odd numbers:', filterEvenNumbers(1, 2, 3, 4, 5, 6));


//6 
const countPositiveNumbers = (...numbers) =>
numbers.filter((number) => number > 0);

console.log('Positive numbers:', countPositiveNumbers(1, -2, 3, -4, -5, 6));


//7 
const getDividedByFive = (...numbers) =>
numbers.filter((number) => number % 5 === 0);

console.log ('Numbers divided by five:', getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2));


//8
const replaceBadWords = (string) => string.split(' ').map((word) =>
word.replace('fuck', '****').replace('shit', '****')).join(' ');

console.log('Replace bad words:', replaceBadWords("Are you fucking kidding?"))