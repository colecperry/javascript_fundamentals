// Parameters are locally scroped variables that are usable inside the function

function functionName(parameter1, parameter2, parameter3) {
    // body code goes here
}

// Anonymous function - function that does not have a name. Since it does not have a name, it cannot be invoked, therefore, we have to invoke it using a callback function

// function() {
//     console.log("Yet more razzling")
// }

// const button = document.getElementById("button");
// button.addEventListener("click", function() {
//     console.log("Yet more razzling")
// })

// Define a function using a function expression - another way of accessing an anonymous function is by decalring a variable and assigning the function as it's value
const fn = function(){
    console.log("NACHOOOO")
}

console.log("fn:", fn)
console.log("fn():", fn())

// IIFE: Immediately-Invoked Function Expression: We recognize the first () as the grouping operator that tells the Javascript engine to interpret the contents as a value. The second () are the function invocation. When we put them immediately after the first set of parenthese, we're invoking the function that those parenthese return immediately

console.log((function(baseNumber) {
    return baseNumber + 3
})(2))

// Function level-scope: This means that if a function is defined inside another function, the inner function has access to all the parameters of, as well as any variables defined in, the outer function. This works recursively: if we nest a third function inside the inner function, it will have access to all the variables of both the inner and outer enclosing functions.

// We call the function outer, which then returns a function call to innerFunction. Notice how innerFunction returns a template literal which has access to all variables from the outer function as well

function outer(greeting, msg ="It's a fine day to learn"){
    const innerFunction = function (name, lang = 'Python') {
        return `${greeting}, ${name}! ${msg} ${lang}`
    }
    return innerFunction("student", "Javascript")
}

console.log(outer("Hello"))

// Notice how the values of the arguments being passed to innerFunction are part of the definition of outer. In order to change those values we have to modify the outer function. This is not ideal.
// The function call is processed by the JavaScript engine from left to right. First, outer is called with the argument "Hello." The return value of calling outer("Hello") is itself a function and, therefore, can itself be called. We do this by chaining on the second set of parentheses.

function outer(greeting, msg = "It's a fine day to learn") {
    const innerFunction = function (name, lang = "Python") {
        return `${greeting}, ${name}! ${msg} ${lang}`;
    };
    return innerFunction;
    }

outer("Hello")("student", "JavaScript")

// ARROW FUNCTIONS - they have no curly braces and have an implicit return which means they automatically return the result of the last expression
// Uses a function expression (assigned to a variable) with no "function" keyword

const add = (parameter1, parameter2) => parameter1 + parameter2
console.log(add(1,1))

// CALLBACK FUNCTIONS - passing a function into another function where it might be invoked, but isn't invoked immediately
function iReturnThings (thing) {
    return thing
}

print_function = iReturnThings(function () {return 4+5})
print_answer = iReturnThings(function () {return 4+5})()
console.log(print_function)
console.log(print_answer)

function doMath (num1, num2, cb){
    return cb(num1, num2)
}

print_fn = doMath(42, 8, function(num1, num2) { return num1 * num2 })

console.log(print_fn, "/n")

// First class functions: the idea in JS that functions are treated like objects where they can be stored in variables, passed into other functions as a parameter, returned from functions, and assigned as properties of other functions
const loopThroughArray = function(array){
    for (let item of array){
        console.log(item)
    }
}

const addOne = function(array){
    let newArray = []
    for(let item of array){
        newArray.push(item + 1)
    }
    console.log(newArray)
}

function handleNumbers(fn){
    let numbers = [1,2,3,4,5]
    fn(numbers)
}

handleNumbers(loopThroughArray)
handleNumbers(addOne)


// handleNumbers is called with loopThroughArray as the argument, and then runs loopThroughArray with numbers as the argument, which console logs each number in the array


