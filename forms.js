// Test this out to console log the event in the terminal from forms.html
// DOM Content loaded event listener allows your html is loaded into the DOM. It's not possivle to manipulate HTML elements that haven't rendered yet, so trying to manipulate the DOM before the DOm fully loads can lead to problems
document.addEventListener('DOMContentLoaded', () => {
    console.log('After DOM Loaded')
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault()
        const newTask = e.target.querySelector('#new-task').value
        handleToDo(newTask)
    }) 
})
console.log('Before DOM Loads')

function handleToDo(todo){
    let p = document.createElement('p')
    p.textContent = todo
    document.querySelector('#todo-form').appendChild(p)
}
