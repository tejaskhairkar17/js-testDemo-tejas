//number can be defined in multiple ways

let num1 = 42;               // integer
let num2 = 3.14;           // floating-point number
let num3 = -7;           // negative number               

// Or

const score = new Number(100);
console.log(num1, num2, num3, score);

// toExponential
let largeNum = 123456789;
console.log("Exponential:", largeNum.toExponential(3));

// toFixed
let pi = 3.14159;
console.log("Fixed:", pi.toFixed(2)); //3.14
console.log("Fixed:", pi.toFixed(4)); //3.1416

// toPrecision
let preciseNum = 5.6789;
console.log("Precision:", preciseNum.toPrecision(3)); //5.68
console.log("Precision:", preciseNum.toPrecision(2)); //5.7
console.log("Precision:", preciseNum.toPrecision(4)); //5.679

// toLocaleString
const num = 1000000;
console.log("Locale String (US)", num.toLocaleString()); // "1,000,000"
console.log("LocaleString (IN)", num.toLocaleString('en-IN')); // "10,00,000"


// ***********************************Math Object**************************************
console.log("Math.PI:", Math.PI); // value of PI
console.log("Math.round(4.7):", Math.round(4.7)); // rounds to nearest integer
console.log("Math.ceil(4.2):", Math.ceil(4.2)); // rounds up
console.log("Math.floor(4.7):", Math.floor(4.7)); // rounds down
console.log("Math.sqrt(16):", Math.sqrt(16)); // square root
console.log("Math.abs(-10):", Math.abs(-10)); // absolute value
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // exponentiation
console.log("Math.min(3, 1, 4, 2):", Math.min(3, 1, 4, 2)); // minimum value
console.log("Math.max(3, 1, 4, 2):", Math.max(3, 1, 4, 2)); // maximum value
console.log("Math.random():", Math.random()); // random number between 0 and 1  

// Random number between min and max

const min = 10;
const max = 20;

const randomNum = Math.floor(Math.random() * (max - min +1) + min);
console.log(`Random number between ${min} and ${max}:`, randomNum);