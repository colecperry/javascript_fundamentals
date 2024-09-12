// Objects are collections of data consisting of a list of properties (key-value pairs) bounded by curly braces. Mupltiple properties can have the same value, but keys must be unique. Remember that all object keys are converted to strings by JS

// empty object
const emptyobj = {}

// object with one property
const obj = { key : 1 };

// object with multiple properties
const obj2 = {
    key1: 'hi', 
    key2: 'there'
}

// nested object
const nestedObj = {
    key1: 0,
    key2: {
        innerKey1: 5,
        innerKey2: 10
    }
}

// Acessing a value stored in an object -> DOT NOTATION
console.log("Dot Notation: \n", nestedObj.key1)
console.log(nestedObj.key2.innerKey1, "\n")

// BRACKET NOTATION -> If you have a non standard string as the key in an object, you'll only be able to access the properties with bracket notation
console.log("Bracket Notation: \n", nestedObj["key1"])
console.log(nestedObj["key2"]["innerKey1"], "\n")

// ACCESSING PROPERTIES DYNAMICALLY -> Can only do with bracket notation because with dot notation Javascript doesn't see mealName as a variable, instead it checks whether a property exists with the literal key mealName
const meals = {
    breakfast: "Oatmeal",
    lunch: "Caesar salad",
    dinner: "Chimichangas",
};

let mealName = "lunch";

console.log(meals[mealName])

// We can also use bracket notation to dynamically set properties
meals[mealName] = 'Chef salad'
console.log(meals)
console.log("\n")

// Object methods

// .keys() and .values()
const wednesdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  
console.log(".keys()", Object.keys(wednesdayMenu))
console.log(".values()", Object.values(wednesdayMenu))
console.log("\n")

// adding an object property
wednesdayMenu.drink = "cola"
console.log(wednesdayMenu)

wednesdayMenu['shake'] = 'vanilla'
console.log(wednesdayMenu, "/n")

// Modify a property destructively
const mondayMenu = {
    cheesePlate: {
      soft: "Chèvre",
      semiSoft: "Gruyère",
      hard: "Manchego",
    },
    fries: "Sweet potato",
    salad: "Cobb",
};

mondayMenu.fries = "Sweet Potato"
console.log(mondayMenu, "\n")

// Modify a property nondestructively
const tuesdayMenu = {...mondayMenu}
tuesdayMenu['fries'] = 'curly'
console.log("monday menu:", mondayMenu)
console.log("tuesday menu:", tuesdayMenu)
console.log("\n")

// Remove a property from an object
const thursdayMenu = {
    cheesePlate: {
      soft: "Brie",
      semiSoft: "Fontina",
      hard: "Provolone",
    },
    fries: "Sweet potato",
    salad: "Southwestern",
  };
  
delete thursdayMenu.salad;
console.log("thursdayMenu:", thursdayMenu, "\n")