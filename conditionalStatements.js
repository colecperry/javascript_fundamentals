// if statement structure:
    // if (condition) {
    //     Block of code
    // }

// if-else statement structure:
    // if (condition) {
    //    Block of code
    // } else {
//          Block of code
// }

function isRose(cat){
    if (cat === 'rose'){
        return 'Hi rose you are so cute!'
    } else if (typeof cat === 'string'){ 
        return `Hi ${cat}`
    } else {
        return 'Sorry, please pass in a cat name'
    }
}

console.log(isRose('ted'))
console.log(isRose('rose'))
console.log(isRose(12))

// Ternary - shorthand for else if 
// if is replaced by ?, else is returned by :

function isBlue(dog){
    return dog === 'blue'?'Hi Blue you are so cute': `Hi ${dog}`
}

console.log(isBlue('blue'))
console.log(isBlue('doo'))

// We can also assign the result of the ternary directly to a variable
const age = 26
const isAdult = age >= 18 ? true : false
console.log(isAdult)

// Switch statement - has many cases with statements

function isBoomer(dog){
    switch(dog){
        case 'boomer':
            return 'Hi boomer you are cute'
        case 'ted':
            return 'Hi ted it is time to go to bed'
        default:
            return `Hi ${dog} nice to see you`
    }
}

console.log(isBoomer('boomer'))
console.log(isBoomer('ted'))
console.log(isBoomer('bones'))

// break is used to stop the switch statement from continuing to look at the case statements once it finds a match. On the below example, if we didn't add 'break', the code would continue to run after it made a match at case 15, continue on through case 19 and set isTeenager to true, and then continue to execute to the default case and reset isTeenager to false

const age3 = 15;

let isTeenager;

switch (age3) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
        isTeenager = true;
        break;
    default:
        isTeenager = false;
}

// Nested if statement:
    // The first if condition for the "base level" of adulthood
    // The second if condition will only execute if the first is truthy
    // The third if condition will only execute if the second is truthy
const age2 = 17;

let isAdult2, canWork, canEnlist, canDrink;

if (age2 >= 16) {
  canWork = true;

  if (age2 >= 18) {
    isAdult2 = true;
    canEnlist = true;

    if (age2 >= 21) {
      canDrink = true;
    }
  }
}

console.log(canWork, isAdult2, canEnlist, canDrink)
