// Introduction to the reduce() Method

console.log("=== Introduction to the reduce() Method ===");

// The reduce() method in JavaScript is a powerful tool used to accumulate or combine elements of an array into a single value.
// It processes each element of the array by applying a function you provide, known as a reducer function.
// The method takes two primary arguments:
// 1. A reducer function (required): This function executes on each element of the array, taking four arguments:
//    - accumulator: Holds the accumulated result from the previous iteration (or the initial value on the first call).
//    - currentValue: The current element being processed in the array.
//    - currentIndex (optional): The index of the current element being processed.
//    - array (optional): The array reduce() was called upon.
// 2. Initial value (optional): The starting value for the accumulator. If not provided, the first element of the array is used as the initial value, and the reduction starts with the second element.

console.log("=== Example 1: Sum of All Elements in an Array ===");

// Example 1: Sum of all elements in an array
// This example shows the most common use case of reduce: summing up all elements in an array.

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0); // Initial value is 0

console.log("Sum of all elements in the array:", sum); // Output: 15

console.log("=== Example 2: Flattening an Array of Arrays ===");

// Example 2: Flattening an array of arrays
// This example demonstrates how reduce can be used to flatten a 2D array (array of arrays) into a single array.

const arrayOfArrays = [[1, 2], [3, 4], [5]];

const flattenedArray = arrayOfArrays.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []); // Initial value is an empty array

console.log("Flattened array:", flattenedArray); // Output: [1, 2, 3, 4, 5]

console.log("=== Example 3: Counting Occurrences of Elements ===");

// Example 3: Counting occurrences of elements in an array
// This example shows how reduce can be used to count the number of occurrences of each element in an array.

const fruits = ['apple', 'banana', 'orange', 'apple', 'orange', 'banana', 'banana'];

const fruitCount = fruits.reduce((accumulator, currentValue) => {
    if (accumulator[currentValue]) {
        accumulator[currentValue]++;
    } else {
        accumulator[currentValue] = 1;
    }
    return accumulator;
}, {}); // Initial value is an empty object

console.log("Count of each fruit:", fruitCount); // Output: { apple: 2, banana: 3, orange: 2 }

console.log("=== Summary ===");

// Summary:
// The reduce() method is a versatile tool in JavaScript for transforming an array into a single value.
// Whether you're summing numbers, flattening arrays, or counting occurrences, reduce can handle it.
// The key is to understand the accumulator and how it evolves with each iteration of the array.

