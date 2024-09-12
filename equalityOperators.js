// strict equality operator (===) -> returns true if two values are equal without performing type conversions
// strict inequality operator (!==) -> returns true if two values are not equal without performing type conversions
// loose equality operator (==) -> returns true if two values are equal or if it can return true after a type conversion
// loose inequality operator (!=) -> It returns true if two values are not equal, performing type conversions as necessary:

console.log(42 === 42)
console.log(42 === '42')

console.log(9000 !== 9001)
console.log(10 !== 10)

console.log(42 == '42')
console.log(true == 1)
console.log("0" == false)

console.log(9001 != '9001')


