// For loops:
    // "For" loop:
        // Initialization (counter): variable declared when the loop begins (arg 1) -> seperate with semicolon
        // Condition: stop condition (arg 2)
        // Increment/decrement (arg 3)
        // Statement: what happens during each iteration

const numbers = [0,2,4,6,8,10,12,14,16,18]

function forLoop(numbers){
    for(let i = 0; i < numbers.length; i++){ // "i" is counter, declare condition
        console.log(numbers[i])
    }
}

forLoop(numbers)
console.log('\n')

// "For of" loop
    // Variable: Variable declared when the loop begins
    // Iterable: Array, string or array like objects
    // Statement: What happens during each iteration

function forOfLoop(number){
    for(let number of numbers){
        console.log(number)
    }
}
forOfLoop(numbers)
console.log('\n')
    
// "For in" loop
    // Variable: variable declared when the loop begins
    // Object
    // Statement: what happens during each iteration

let oneBook = {
    title: 'Eloquent Javascript',
    author: 'Marijn Haverbeke',
    publisher: 'No starch Press'
}

function forInLoop(obj){
    for(let key in obj){
        console.log(key)
        console.log(obj[key])
    }
}

forInLoop(oneBook)

// for each: used to execute a provided function once for each element in an array, especially when you don't need to create a new array like with map
// The forEach method takes up to three arguments:
// 1. Current element: The current element being processed in the array.
// 2. Index (optional): The index of the current element being processed.
// 3. Array (optional): The array that forEach is being applied to.

// Example 1: Basic Usage with Arrow Function
console.log("\nExample 1: Basic Usage with Arrow Function");
const nums = [1, 2, 3, 4, 5];
nums.forEach(number => {
    console.log("Number:", number);
});

// Example 2: Using the Index Argument with Arrow Function
console.log("\nExample 2: Using the Index Argument with Arrow Function");
const fruits = ["Apple", "Banana", "Mango"];
fruits.forEach((fruit, index) => {
    console.log(`Fruit ${index}: ${fruit}`);
});

// Example 3: Modifying Elements of an Array (side-effects) with Arrow Function
console.log("\nExample 3: Modifying Elements of an Array (side-effects) with Arrow Function");
const names = ["John", "Jane", "Doe"];
names.forEach((name, index, arr) => {
    arr[index] = name.toUpperCase();
});
console.log("Modified Names Array:", names);


console.log("\n")
// while loop: used to loop until a certain condition is met

const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    let i = 0; // the initialization moves OUTSIDE the body of the loop!
    while (i < gifts.length) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    i++; // the iteration moves INSIDE the body of the loop!
}

return gifts;
}
wrapGifts(gifts)





