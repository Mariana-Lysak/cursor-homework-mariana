const ukraine = { 
    tax: 0.195, 
    middleSalary: 1789, 
    vacancies: 11476
 }; 

const latvia = { 
    tax: 0.25, 
    middleSalary: 1586, 
    vacancies: 3921 
}; 

const litva = {
    tax: 0.15, 
    middleSalary: 1509, 
    vacancies: 1114 
};




//1
function getMyTaxes (salary) {
    return this.tax * salary;
}

console.log('The payroll tax in Ukraine will be:', getMyTaxes.call(ukraine, 10000));

//2
function getMiddleTaxes (country) {
    return this.tax * this.middleSalary;
}

console.log('The payroll tax on the middle salary in Ukraine is:', getMiddleTaxes.call(ukraine));
console.log('The payroll tax on the middle salary in Latvia is:',getMiddleTaxes.call(latvia));
console.log('The payroll tax on the middle salary in Litva is:',getMiddleTaxes.call(litva));

//3
function getTotalTaxes () {
    return this.tax * this.middleSalary * this.vacancies;  
}

console.log('The total payroll tax in Ukraine is:', getTotalTaxes.call(ukraine));
console.log('The total payroll tax in Latvia is:', getTotalTaxes.call(latvia));
console.log('The total payroll tax in Litva is:', getTotalTaxes.call(litva));

//4

function getMySalary() {
    const minSalary = 1500;
    const maxSalary = 2000;
    const salary = Math.round(Math.random() * (maxSalary - minSalary + 1)) + minSalary;
    const taxes = +(this.tax * salary).toFixed(2);
    const profit = salary - taxes;

    setInterval(() => {
    console.log( { salary, taxes, profit } );
    }, 10000)
}

getMySalary.call(ukraine);
getMySalary.call(latvia);
getMySalary.call(litva);