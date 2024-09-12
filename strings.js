const welcomeMessage = "We" + ' ' + `can` + " " + 'concat' + `enate` + " as many strings " + 'as our heart ' + `desires.`;
console.log(welcomeMessage)

const currentUser = 'Grace Hopper'

console.log("Welcome,", currentUser)

// String interpolation - use to dynamically insert values in the middle of a string - use backticks or template literals
const myString = 'template literal';

const myNumber = 10;

const myBoolean = false;

console.log(`Saying that interpolation with ${myString}s is better than concatenation ${90 + myNumber}% of the time is simply ${myBoolean}. But it is pretty cool!`)