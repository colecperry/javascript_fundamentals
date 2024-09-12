// .filter(): is a built-in array method in JavaScript that creates a new array with all elements that pass a certain test or condition provided by a callback function. It's particularly useful for narrowing down data based on specific criteria.

// Callback Function: The .filter() method iterates over each element of the array and applies a callback function to each element.
// Boolean Test: The callback function should return true or false. If it returns true for a given element, that element is included in the new array. If it returns false, the element is excluded.
// Non-Mutating: The original array remains unchanged. Instead, .filter() returns a new array containing only the elements that satisfy the condition.

// SYNTAX:
// let newArray = array.filter(callback(element, index, array));
// callback: a function that returns true or false for each element determining if it should be included in the new array
// element: The current element being processed in the array (this argument is required).
// index (optional): The index of the current element being processed.
// array (optional): The array on which .filter() was called.


console.log("Example 1: Filtering for Even Numbers");

// Example 1: Filtering an array to get only even numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Original Array:", numbers);
console.log("Filtered Even Numbers:", evenNumbers);

console.log("\nExample 2: Filtering an Array of Objects");

// Example 2: Filtering an array of objects based on a property value
const people = [
    { name: "Alice", age: 25, city: "New York" },
    { name: "Bob", age: 30, city: "San Francisco" },
    { name: "Charlie", age: 35, city: "New York" },
    { name: "David", age: 40, city: "Los Angeles" }
];
const newYorkers = people.filter(person => person.city === "New York");
console.log("Original People Array:", people);
console.log("Filtered New Yorkers:", newYorkers);

console.log("\nExample 3: Filtering with Complex Conditions");

// Example 3: Filtering an array with complex conditions (e.g., multiple properties)
const products = [
    { name: "Laptop", price: 1000, inStock: true },
    { name: "Phone", price: 600, inStock: false },
    { name: "Tablet", price: 400, inStock: true },
    { name: "Monitor", price: 300, inStock: true }
];
const affordableInStockProducts = products.filter(product => product.price < 800 && product.inStock);
console.log("Original Products Array:", products);
console.log("Filtered Affordable In-Stock Products:", affordableInStockProducts);
