// Setup: Open up the wikipedia page for ADA Lovelace: https://en.wikipedia.org/wiki/Ada_Lovelace

// HTML collection: is a live collection of DOM elements that is automatically updated when the document changes. It's similar to an array but lacks some array methods, and it's typically returned by methods like getElementsByClassName and getElementsByTagName.

// Query Selector: allows you to select the first element in the document that matches a specific pattern or identifier. This pattern can include HTML attributes, element types, and other structural elements, not just CSS styles. For example, you can use it to select an element by its ID, class, or other attributes, much like using a combination of HTML and CSS selectors
// In the console, type:
document.querySelector("h1")

// Query Selector All: allows you to find all elements that match and returns a NodeList collection
document.querySelectorAll("h1")

// Get element by CSS ID: Retrieves an element by its unique ID attribute. The id attribute is used to uniquely identify an element within the document. This means each id should be unique across the entire HTML document.
document.getElementById("content")

// Get element by classname: Returns a live HTMLCollection of all elements that have a specified class name, which are not unique. It represents the classes assigned to an element, allowing you to read or modify the list of class names as a single string. This property is often used to apply or remove CSS styles and to manipulate elements based on their class
document.getElementsByClassName("mw-content-container")

// Get element by tag name: Returns a live HTMLCollection of all elements with a specified tag name. For example getElementsByTagName('p') would return a live HTMLCollection of all <p> (paragraph) elements in the document. 
document.getElementsByTagName("h1")
p = document.getElementsByTagName("h1")[0]

// change an attribute
p.id = "herro"
// p.src = 'hi'
p.className = 'yooo'
// p.style = 'coo'

// changing text
p = document.getElementsByTagName("h1")[0]
p.textContent = "Ada from China"
p.innerText = 'Ada in Russia'

// Change properties using the 'style' attribute
const el = document.getElementById('main')
el.style.height = '300px'
el.style.backgroundColor = '#27647B'
el.style.fontSize = '24px'

// Add elements to the dom
// Create element creates any valid HTML tag
const element = document.createElement('div')

// Add elements to the dom, we need to use append
document.body.append(element)

// Remove elements from the DOM
someElement.removeChild(someChildElement);

const ul = document.getElementsByTagName("ul")[0];
const secondChild = ul.querySelector("li:nth-child(2)");
ul.removeChild(secondChild);

// Remove
ul.remove();

