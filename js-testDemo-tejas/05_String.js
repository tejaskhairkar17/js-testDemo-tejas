let s = new String("This is Tejas");
let rev =""
for(let i = s.length -1 ; i>=0; i--){
    rev += s.charAt(i);
}
console.log(rev);
console.log(`Length of Striing is : ${slength}`);

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