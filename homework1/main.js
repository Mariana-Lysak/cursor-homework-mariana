//1 товар
const applePrice=15.678;
console.log("Apple price:", applePrice);
//2 товар
const pearPrice=123.965;
console.log("Pear price:", pearPrice);
//3 товар
const lemonPrice=90.2345;
console.log("Lemon price:",lemonPrice);



//Використовуючи вбудований об'єкт Math – виведіть максимальне число
const maxPrice= Math.max(applePrice, pearPrice, lemonPrice);
console.log("Max price:", maxPrice);

//Використовуючи вбудований об'єкт Math – виведіть мінімальне число
const minPrice= Math.min(applePrice, pearPrice, lemonPrice);
console.log("Min price:", minPrice);

//Складіть вартість всіх товарів, помістіть її в змінну та виведіть цю суму
const sumOfPrices= applePrice + pearPrice + lemonPrice;
console.log("The sum of prices:", sumOfPrices);

//Відкиньте копійки у всіх товарів, потім – складіть цілу частину вартості кожного товару між собою. Округлення використовувати в МЕНЬШУ сторону.
const integerApplePrice= Math.floor(applePrice);
const integerPearPrice= Math.floor(pearPrice);
const integerLemonPrice= Math.floor(lemonPrice);

const sumIntegerPrices= integerApplePrice + integerPearPrice + integerLemonPrice;
console.log("Sum of integer prices:",sumIntegerPrices);

//Виведіть суму товарів округлену до сотень. (Наприклад якщо вийшло 260, то виведіть 300)
const roundedSum= Math.round(sumIntegerPrices/100)*100;
console.log("The rounded sum of prices:",roundedSum);

//Виведіть булеве значення: чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
const isEven= sumIntegerPrices % 2;
console.log(`The sum of prices is: ${isEven ? 'odd':'even'} number`);

//Виведіть суму решти, при оплаті всіх товарів (без округлення), якщо клієнт платить 500 грн.
const payment=500;
const rest=payment - sumOfPrices;
console.log ("The rest:", rest);

//Виведіть середнє значення цін, округлене до другого знаку після коми
const averagePrice=+((sumOfPrices/3).toFixed(2));
console.log("The average price:",averagePrice);

//(Більш складне) Створіть змінну, в якої збережіть випадкову знижку (використовуйте функцію Math.random)
const discount=Math.random()*sumOfPrices;
console.log("Discount:", discount);

//Зробіть клієнту випадкову знижку та виведіть суму до оплати округлену до 2 знаків після коми. 
const totalSumForPayment= +((sumOfPrices-discount).toFixed(2));
console.log("Price with discount:", totalSumForPayment);

//Виведіть чистий прибуток, якщо клієнт заплатив зі знижкою та собівартість товарів рівно в два рази нижче їх ціни? 
const profit=+(((sumOfPrices/2)-discount).toFixed(2));
console.log("Profit:",profit);



//Advanced

console.log(`Max price: ${maxPrice},
Min price: ${minPrice},
The sum of prices: ${sumOfPrices},
Sum of integer prices: ${sumIntegerPrices},
The rounded sum of prices: ${roundedSum},
The sum of prices is ${isEven},
The sum of prices is ${isEven},
The rest ${rest},
The average price ${averagePrice},
Discount ${discount},
Price with discount ${totalSumForPayment},
Profit ${+profit}`);