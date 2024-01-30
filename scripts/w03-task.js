/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2){
    return number1 + number2
}

function addNumbers(){

    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)

    document.querySelector('#sum').value = add(addNumber1, addNumber2)
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers)
/* Function Expression - Subtract Numbers */
const subtract = function (number1, number2){
    return number1 - number2
}

const subtractNumbers = function(){

    let subtractNumber1 = Number(document.querySelector('#subtract1').value)
    let subtractNumber2 = Number(document.querySelector('#subtract2').value)

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2)
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2

const multiplyNumbers = () => {

    let factor1 = Number(document.querySelector('#factor1').value);
    let factor2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(factor1, factor2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);
/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2

const divideNumbers = () => {

    let Dividend = Number(document.querySelector('#dividend').value);
    let divisor = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(Dividend, divisor);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function calculateTotalDue() {
    let subtotal = parseFloat(document.querySelector('#subtotal').value);
    const isMember = document.querySelector('#member').checked;
  
    if (isMember) {
      subtotal *= 0.8; // Apply 20% discount
    }
  
    document.querySelector('#total').textContent = `$${subtotal.toFixed(2)}`;
  }
document.querySelector('#getTotal').addEventListener('click', calculateTotalDue);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];
document.querySelector('#array').innerHTML = `Numbers Array: ${numbersArray.join(', ')}`;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 === 1);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);
/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = numbersArray.reduce((sum, number) => sum + number)

/* Output Multiplied by 2 Array */
let multiplied = document.querySelector('#multiplied').innerHTML
multiplied = numbersArray.map(number => number * 2) 
document.querySelector('#multiplied').innerHTML = `Source Array Times Two: ${multiplied}`

/* Output Sum of Multiplied by 2 Array */
sumOfDoubled = multiplied.reduce((accumulator, current) => accumulator + current, 0)

document.querySelector('#sumOfMultiplied').innerHTML = `Sum of Source Array Times Two: ${sumOfDoubled}`