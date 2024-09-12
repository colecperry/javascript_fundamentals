// Destructuring

let catObj = {
    name: 'Rose',
    age: 9,
    color: 'Blue'
}

// Here we are using destructuring to go into catObj and look for a key of name and age, if the key exists, we are going to give the variable name and age the value from the keys found. This allows us to skip the need to use dot notation over and over
let {name, age} = catObj
console.log(name)
console.log(age, "\n")

// Example with arrays (alterative would be accessing the indecies)
let arr = [1,2,3]
let [num1, num2, num3] = arr
console.log(num1)
console.log(num2)
console.log(num3, '\n')

// Another example with arrays the first comma tells us to skip the first element
let [, color2, color3] = ['red', 'blue', 'yellow']
console.log(color2)
console.log(color3, "\n")

// We can also use destructuring with a nested data structure
const doggie = {
    name: 'Buzz',
    breed: 'Great Pyrenees',
    furColor: 'black and white',
    activityLevel: 'sloth-like',
    favoriteFoods: {
      meats:{
        ham: 'smoked',
        hotDog: 'Oscar Meyer',
      },
      cheeses:{
        american: 'kraft'
      }
    }
  };
  
const { ham, hotDog } = doggie.favoriteFoods.meats;

console.log(ham)
console.log(hotDog, "\n")

// Destrcuturing with strings
const dogsName = 'Sir Woody BarksALot';
const [title, firstName, lastName] = dogsName.split(' ');
console.log(title, firstName, lastName);