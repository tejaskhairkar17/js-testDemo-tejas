// let s = new String("This is Tejas");
// let rev =""
// for(let i = s.length -1 ; i>=0; i--){
//     rev += s.charAt(i);
// }
// console.log(rev);
// console.log(`Length of Striing is : ${s.length}`);

// // String is a sequence of characters
// // You can access each character using charAt() method
// // e.g., s.charAt(0) will return 'T'
// // You can also use bracket notation to access characters
// // e.g., s[0] will return 'T'
// // Strings are immutable in JS
// // You cannot change a character at a specific index
// // e.g., s[0] = 't' will not change the string
// // You can use length property to get the length of the string
// // e.g., s.length will return 13 for "This is Tejas
// // You can use various string methods like toUpperCase(), toLowerCase(), indexOf(), substring(), etc.
// // e.g., s.toUpperCase() will return "THIS IS TEJAS"
// // e.g., s.indexOf("Tejas") will return 8
// // e.g., s.substring(0, 4) will return "This"   
// // There are many more string methods available in JS
// // You can refer to MDN documentation for more details on string methods
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// // Strings are widely used in JS for various purposes like displaying messages, taking input, etc.
// // // Always remember to use string methods to manipulate strings effectively
// // // Happy Coding!!!

// String operations
let str1 = "Hello";
let str2 = "World"; 
let str3 = str1 + " " + str2; // Concatenation
console.log("Concatenated String:", str3);

let str4 = `${str1}, ${str2}!`; // Template Literal
console.log("Template Literal String:", str4);

let str5 = str3.slice(0, 5); // Slicing
console.log("Sliced String:", str5);

let str6 = str3.replace("World", "JavaScript"); // Replacement
console.log("Replaced String:", str6);

// // String operations are essential for manipulating text data in JS
// // Concatenation is done using + operator or template literals
// // Slicing is done using slice() method which takes start and end indices
// // Replacement is done using replace() method which takes the substring to be replaced and the new substring
// // There are many more string operations available in JS
// // You can refer to MDN documentation for more details on string operations
// // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
// // Strings are widely used in JS for various purposes like displaying messages, taking input, etc.
// // Always remember to use string methods to manipulate strings effectively
// // Happy Coding!!!

