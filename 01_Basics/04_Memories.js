// ******************Stack Memory vs Heap Memory in JavaScript**************************************

// In JavaScript, memory management is primarily divided into two types: Stack Memory and Heap Memory.
// Understanding the difference between these two types of memory is crucial for efficient coding and performance optimization.

// Stack Memory:
// Stack memory is used for static memory allocation.
// It stores primitive data types such as numbers, strings, booleans, null, and undefined.  
// Stack memory is organized in a Last In First Out (LIFO) manner.
// When a function is called, a new block is created on the stack to hold its local variables and parameters.
// Once the function execution is complete, the block is removed from the stack, and the memory is freed.
// Stack memory is faster to access compared to heap memory due to its organized structure.
// However, stack memory is limited in size, and excessive use can lead to stack overflow errors.
let stackVar1 = 10;               // Stored in Stack Memory
let stackVar2 = "Hello World";    // Stored in Stack Memory
function stackFunction() {
    let localVar = 20;               // Stored in Stack Memory
    console.log(localVar);
}
stackFunction();

// Heap Memory:
// Heap memory is used for dynamic memory allocation.
// It stores complex data types such as objects, arrays, and functions.
// Heap memory is not organized in a specific manner, making it slower to access compared to stack memory.
// When an object or array is created, memory is allocated in the heap, and a reference to that memory location is stored in the stack.
let heapVar1 = { name: "Tejas", age: 26 }; // Object stored in Heap Memory
let heapVar2 = [1, 2, 3, 4, 5];             // Array stored in Heap Memory
function heapFunction() {
    let localObj = { city: "Bangalore" };    // Object stored in Heap Memory
    console.log(localObj);
}
heapFunction();

// Garbage Collection:
// JavaScript has an automatic garbage collection mechanism that helps manage memory in the heap.
// When there are no references to an object or array in the heap, the garbage collector frees up that memory.
// This helps prevent memory leaks and ensures efficient memory usage.
let tempObj = { temp: "data" }; // Object created in Heap Memory
tempObj = null;                 // Reference removed, eligible for garbage collection
// Understanding the differences between stack and heap memory is essential for writing efficient JavaScript code.
// Proper memory management can lead to better performance and reduced memory-related issues in applications.

// End of Stack Memory vs Heap Memory in JavaScript**************************************

// Heap Memory Example:
let var1 = 20;
let var2 = var1
var2 = 30

console.log("Var1:", var1)  // 20
console.log("Var2:", var2)  // 30

// Stack Memory Example:
let objVar1 ={ name: "Tejas", age: 26  }
let objVar2 = objVar1
objVar2.age = 30   
console.log("ObjVar1:", objVar1)  // { name: "Tejas", age: 30 }
console.log("ObjVar2:", objVar2)  // { name: "Tejas", age: 30 }
