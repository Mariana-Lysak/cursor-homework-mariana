let numberN;
let numberM;

do {
    numberN= prompt('Write a first number, please:');
    numberN= parseInt(numberN);
} while (isNaN(numberN));

do {
    numberM= prompt('Write a second number, please:');
    numberM= parseInt(numberM);
} while (isNaN(numberM));

minNumberN=Math.min(numberN, numberM);
maxNumberM=Math.max(numberN, numberM);

console.log (minNumberN, maxNumberM);

const skipEvenNumbers= confirm ('Skip odd numbers?');
console.log('%c%s', 'color: grey; font: 0,5rem/1 Arial;',skipEvenNumbers ? 'true' : 'false');

let sumOfNumbers;

for(sumOfNumbers=0; minNumberN<=maxNumberM;minNumberN++) {
    if (skipEvenNumbers) {
        if (minNumberN%2 == 0) {
            continue;
        } else {
            sumOfNumbers+=minNumberN;
        }
    } else {
        sumOfNumbers+=minNumberN
    }
};

console.log('%c%s', 'color: red; font: 1.2rem/1 Tahoma;', sumOfNumbers);