// The .map() method in JS is specifically designed for creating a new array by transforming each element of an existing array leaving the original array unchanged. A 'for' loop does not inherently return anything

books = [
    {
        title: 'Eloquent Javascript',
        price: 10,
        inventory: 10
    },
    {
        title: 'Python for beginners',
        price: 45,
        inventory: 3
    },
    {
        title: 'Ba hum bug',
        price: 6.25,
        inventory: 7
    }
]

// Problem with for loop -> not dynamic
function loopAndUpdate(array){
    const updatedArray = [];
    for(let item of array){
        updatedArray.push(item.title)
    }
    return updatedArray
};

// What if we want to return an array of prices? Or titles? What if I want to return an array of books 50% off?Our function only does one thing -> We need another function

// Return an array of titles
const title = books.map(item => item.title)

console.log(title)

// Return an array of prices
function pricesFn(item){
    return item.price
}
const prices = books.map(pricesFn)
console.log(prices)

// Return an array of inventory
const inventory = books.map(item => item.inventory)
console.log(inventory)

// Return an array of books, 50% off
const halfOff = books.map(item => {
    let itemCopy = {...item}
    itemCopy.price = Math.floor(itemCopy.price/2)
    return itemCopy
})

console.log(halfOff)