let stringValue = "33";

let conInt = Number(stringValue);
console.log("1Converted Integer:", conInt);
console.log("1Type of Converted Integer:", typeof conInt);

// 33 -> 33 number
// "" -> 0 number
// " " -> NaN number
// "Tejas" -> NaN number (Not a Number type)
// "33abc" -> NaN number
// "33.45" -> 33.45 number
// "0" -> 0 number
// "true" -> NaN number
// "false" -> NaN number
// null -> 0 number
// undefined -> NaN number
// [] -> 0 number
// [33] -> 33 number
// [1,2] -> NaN number
// {} -> NaN number
// function() {} -> NaN number etc.,
// Different values will give different results when converted to Number type
// So, be cautious while converting to Number type
// Always validate the input before conversion
// Use isNaN() function to check if the value is NaN or not
// e.g., isNaN(conInt) will return true if conInt is NaN
// You can also use parseInt() and parseFloat() functions for conversion
// parseInt() will convert string to integer
// parseFloat() will convert string to float
// Both functions will ignore the non-numeric characters after the number
// e.g., parseInt("33abc") will return 33
// e.g., parseFloat("33.45abc") will return 33.45
// If the string does not start with a number, both functions will return NaN
// e.g., parseInt("abc33") will return NaN
// e.g., parseFloat("abc33.45") will return NaN 

let conFloat = parseFloat(stringValue);
console.log("2Converted Float:", conFloat);
console.log("2Type of Converted Float:", typeof conFloat);

// Float and Integer both are of Number data type in JS 
// but Float can have decimal values
// Integer can have only whole numbers
// e.g., 33.45 is float, 33 is integer
// Both are represented as Number data type in JS
// So, typeof operator will return 'number' for both float and integer
// There is no separate data type for float and integer in JS
// Both are treated as Number data type
// You can use Number.isInteger() function to check if a number is integer or not
// e.g., Number.isInteger(conInt) will return true
// e.g., Number.isInteger(conFloat) will return false

let conString = String(conInt);
console.log("3Converted String:", conString);
console.log("3Type of Converted String:", typeof conString);
// String conversion will convert any data type to string
// e.g., String(33) will return "33"
// e.g., String(true) will return "true"
// e.g., String(null) will return "null"
// e.g., String(undefined) will return "undefined"
// e.g., String([1,2,3]) will return "1,2,3"
// e.g., String({a:1,b:2}) will return "[object Object]"
// e.g., String(function() {}) will return "function() {}"
// So, be cautious while converting to String type
// Always validate the input before conversion
// Use typeof operator to check the data type before and after conversion
// to avoid unexpected results
// Also, remember that String conversion may lead to loss of information
// e.g., String([1,2,3]) loses the array structure and becomes a comma-separated string
// So, use String conversion judiciously
// Prefer using JSON.stringify() for complex data types like arrays and objects
// e.g., JSON.stringify([1,2,3]) will return "[1,2,3]"
// e.g., JSON.stringify({a:1,b:2}) will return "{"a":1,"b":2}"
// This way, you can preserve the structure of the data
// Use JSON.parse() to convert back to original data type
// e.g., JSON.parse("[1,2,3]") will return [1,2,3]
// e.g., JSON.parse("{"a":1,"b":2}") will return {a:1,b:2}
// This is especially useful for data transmission and storage
// in web applications
// Always consider the context and requirements before performing type conversions
// to ensure data integrity and correctness

let conBool = Boolean(conInt);
console.log("4Converted Boolean:", conBool);
console.log("4Type of Converted Boolean:", typeof conBool);  

let boolValue = 0;
let conBoolFromNum = Boolean(boolValue);
console.log("5Converted Boolean from Number:", conBoolFromNum);
console.log("5Type of Converted Boolean from Number:", typeof conBoolFromNum);

let numValue = 1;
let conBoolFromNum2 = Boolean(numValue);
console.log("6Converted Boolean from Number 2:", conBoolFromNum2);
console.log("6Type of Converted Boolean from Number 2:", typeof conBoolFromNum2);

// Boolean conversion rules:
// 0 -> false
// 1 (or any non-zero number) -> true
// "" (empty string) -> false
// " " (string with space) -> true
// "false" (string) -> true
// null -> false
// undefined -> false
// [] (empty array) -> true
// [0] (array with zero) -> true
// {} (empty object) -> true
// function() {} (function) -> true
// Always validate the input before conversion to avoid unexpected results  
// Use typeof operator to check the data type before and after conversion
// Use Boolean conversion judiciously based on the context and requirements 
// to ensure data integrity and correctness
// Remember that JavaScript is a loosely typed language
// and type coercion can lead to unexpected behavior if not handled properly.
// Always test your code thoroughly to ensure it behaves as expected
// in different scenarios and edge cases.



// ***********************************Operations in JavaScript****************************************
let a = 10;
let b = 3;
// Arithmetic Operators
console.log("Addition:", a + b);    
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);        // Remainder
console.log("Exponentiation:", a ** b); // a raised to the power b
console.log("Increment:", ++a);       // Pre-increment
console.log("Decrement:", --b);       // Pre-decrement
// Note: a is now 11 and b is now 2 after increment and decrement operations

// Assignment Operators
let c = 5;
c += 2; // c = c + 2
console.log("c after += 2:", c);
c -= 1; // c = c - 1
console.log("c after -= 1:", c);
c *= 3; // c = c * 3
console.log("c after *= 3:", c);
c /= 2; // c = c / 2
console.log("c after /= 2:", c);
c %= 4; // c = c % 4
console.log("c after %= 4:", c);    

// Comparison Operators
let x = 10;
let y = "10";
console.log("x == y:", x == y);          // Equality (loose)
console.log("x === y:", x === y);        // Equality (strict)
console.log("x != y:", x != y);          // Inequality (loose)
console.log("x !== y:", x !== y);        // Inequality (strict)
console.log("x > 5:", x > 5);            // Greater than
console.log("x < 15:", x < 15);          // Less than
console.log("x >= 10:", x >= 10);          // Greater than or equal to
console.log("x <= 20:", x <= 20);          // Less than or equal to

// Logical Operators
let p = true;
let q = false;
console.log("p && q:", p && q);          // Logical AND
console.log("p || q:", p || q);          // Logical OR
console.log("!p:", !p);                    // Logical NOT   

// Note: Always use parentheses to ensure the correct order of operations
let result = (a + b) * (x - 5) / 2;
console.log("Result of (a + b) * (x - 5) / 2:", result);
// This ensures that addition and subtraction are performed before multiplication and division
// and helps avoid confusion and errors in complex expressions
// Always test your operations thoroughly to ensure they behave as expected
// in different scenarios and edge cases.
