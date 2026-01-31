const arr = [1,2,3,4,5];
// console.log("Array:", arr);

const arr1 = new Array(5,6,7,8,9);
// console.log("Array using new:", arr1);

// arr1.push(10); // adding element at the end
// console.log("After push:", arr1);

// arr.pop(); // removing last element
// console.log("After pop:", arr);

// arr.unshift(2); // adding element at the beginning
// console.log("After unshift:", arr);

// arr.shift(); // removing first element
// console.log("After shift:", arr);

// arr.splice(2, 1, 10, 11); // at index 2, remove 1 element and add 10, 11
// console.log("After splice:", arr);


// console.log("Array length:", arr.length); // length of the array
// console.log("Element at index 2:", arr[2]); // access element at index 2
// console.log("Index of element 4:", arr.indexOf(4)); // index of element 4
// console.log(arr.indexOf(10)); // will return -1 as 10 is not present
// console.log(arr.includes(4)); // check if array includes 4
// console.log(arr.includes(10)); // check if array includes 10 


// // Iterate over array
// arr.forEach((element, index) => {
//     console.log(`Element at index ${index}:`, element);
// });

//join array elements into a string
const str = arr.join();
console.log("Joined string:", str);
console.log("Type of joined string:", typeof str);