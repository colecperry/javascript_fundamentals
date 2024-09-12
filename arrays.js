// Arrays are ordered

arrayOfStrings = ["This", "is", "an", "array", "of", "strings."]
arrayOfDifferentDataTypes = ["Hello, world!", 42, null, NaN]

// Indexing
console.log(arrayOfStrings[0])

// Array properties
console.log(arrayOfStrings.length)

// Array methods
const string = 'Hello'
console.log(string.toUpperCase)

// UNSHIFT - adds elements to the beginning of an array -> destructive method
array1 = [1,2,3,4,5]
array1.unshift(0)
console.log('Unshift:', array1)

// PUSH - adds elements to the end of an array -> destructive method
array1.push(6)
console.log("push:", array1)

// POP - removes the last element in an array -> destructive method
array1.pop()
console.log("pop:", array1)

// SHIFT - removes the first element in an array -> destructive method
array1.shift()
console.log("shift:", array1)

// SLICE - returns a portion of an array, removes elements from an array undestructively

const primes = [2, 3, 5, 7];

const copyOfPrimes = primes.slice(); // Without any arguments slice creates a copy like the spread operator
console.log(copyOfPrimes)

const slicedArray = primes.slice(1,3) // First argument is where the slice starts and second is what index it stops before
console.log('sliced array:', slicedArray)

const lastElement = primes.slice(-1)
console.log('Last element:', lastElement)

const lastTwo = primes.slice(-2)
console.log('Last two elements:', lastTwo)

// SPLICE - performs a slice, but destructively

const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

splicedDays = days.splice(2) // With one argument -> where to start the splice
console.log('splice method:', splicedDays)

console.log('days:', days)

const days2 = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

splicedDays2 = days2.splice(2,1) // With two arguments -> where to start the splice, and delete count
console.log('splice method 2:', splicedDays2)

console.log('days:', days2)

// USE SPLICE TO REPLACE ELEMENTS IN AN ARRAY with 3 arguments: After the first two, every additional argument passed to .splice() will be inserted into the Array at the position indicated by the first argument

// ex.
    // array.splice(start, deleteCount, item1, item2, ...)

const cards = [
    "Ace of Spades",
    "Jack of Clubs",
    "Nine of Clubs",
    "Nine of Diamonds",
    "Three of Hearts",
    ];

splicedCards = cards.splice(2, 1, "Ace of Clubs")
console.log('card returned by splice method: ', splicedCards)
console.log('cards after splice', cards) // Notice how the second index is replaced by 'Ace of Clubs' passed in one time

const menu = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
    ];

splicedMenu = menu.splice(1, 2, "Veggie Burger", "House Salad", "Teriyaki Tofu")
console.log("Items returned by splice:", splicedMenu)
console.log("Menu after splicing:", menu)

// SPREAD OPERATOR - creates a copy of an array, but does not point to the same location in memory

const coolCities = ["New York", "San Francisco"]

const copyOfCoolCities = [...coolCities, "Miami"];

console.log("copied with spread operator:", copyOfCoolCities)
copyOfCoolCities.push("Seattle")
console.log("unchanged:", coolCities) // Notice how coolCities is unchanged
console.log("changed:", copyOfCoolCities) // Notice how the copy is changed only

// SLICING AND SPREADING - combining slice and the spread operator allows us to replace elements nondestructively, leaving the orifinal array unharmed

const menu2 = [
    "Jalapeno Poppers",
    "Cheeseburger",
    "Fish and Chips",
    "French Fries",
    "Onion Rings",
  ];
  
  const newMenu = [
    ...menu2.slice(0, 1),
    "Veggie Burger",
    "House Salad",
    "Teriyaki Tofu",
    ...menu2.slice(3),
  ];

console.log("menu:", menu)
console.log("newMenu:", newMenu)


// Update element in an array -> can also use dot notation
arrayOfDifferentDataTypes[0] = 'Hello, Jupiter'

console.log(arrayOfDifferentDataTypes)

// Nested Arrays
const nestedArray = [ "How",
    ["deep", ["can", ["we", ["go", ["?"], "Pretty"], "dang"], "deep,"], "it"],
    "seems."]

console.log("nestedArray[0]:", nestedArray[0])
console.log("nestedArray[1]:", nestedArray[1])
console.log("nestedArray[2]:", nestedArray[2])
console.log("nestedArray[1][0]:", nestedArray[1][0])
console.log("nestedArray[1][1]:", nestedArray[1][1])
console.log("nestedArray[1][1][0]:", nestedArray[1][1][0])
console.log("nestedArray[1][1][1]:", nestedArray[1][1][1])
console.log("nestedArray[1][1][1][1]:", nestedArray[1][1][1][1])
