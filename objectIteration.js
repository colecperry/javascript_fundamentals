// iteration vs looping: Looping is the process of executing a set of statements repeatedly until a condition is met. It's great for when we want to do something a specific number of times (for loop) or unlimited times until the condition is met (while or do while loop). Iteration is the process of executing a set of statements once for each element in a collection. 

// For loop: -> let is required because we are incrementing a counter variable
let myArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}

// While loop -> let is required because we are incrementing a counter variable
let j = 0;

while (j < myArray.length) {
    console.log(myArray[j++]);
}

// For Of Loop

for (const element of myArray) {
    console.log(element);
}

