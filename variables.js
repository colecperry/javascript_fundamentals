// javascriptUsesCamelCase

// In js you need to declare your variable before you assign it
// let - let, unlike var, will throw an error if you try to declare the same variable a second time
let pi
console.log(pi)
pi = 3.14
console.log(pi)

// OR
// let pi = 3.14159

// With let you can not redeclare a variable but you can reassign it's value
pi = 3.141596
console.log(pi)

// Const does not let you redeclare or reassign your variable
const egg = 2
egg = 3
console.log(egg) // See error in terminal


// Run your code by typing "node variables.js"