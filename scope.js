// Global - accessible in every scope
// Functional - accessible and specific within a function, can't be accessed by anything in outer scopes
// Block - accessible within a block or statement, can't be accessed by anything in outer scopes


// Global scope example - notice how the global variable cat is accessible within the function isCute
const cat = 'Rose'
function isCute(cat){
    let age = 9
    console.log('global variable accessible in functional scope:', cat)
    if (cat === 'Rose'){
        cuteOrNotnot = true
        console.log('global variable accessible in block scope:', cat)
        console.log('functional scope accessible within block scope:', age)
    } else {
        console.log(cuteOrNot) 
    }
}

isCute(cat)
// console.log(age) // This line will cause an error because age variable within functional scope is not accessible within global scope
// console.log(isCute) // This line will cause an error because the isCute variable is only accessible within block scope, and not functional or global scope

// isCute('Ted') // The console log in the else statement will cause an error since the cat is not equal to 'Rose', the code skips that code and the else block does not have access to the 'isCute' variable

