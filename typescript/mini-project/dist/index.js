"use strict";
const button = document.getElementById('btn'); // The ! in TS removes the "| null" from the type definition. Only use when the element definitely exists. It's called the "non-null assertion operator."
const form = document.querySelector('form'); // With an element type as the selector, e.g., form, TS knows to apply a narrower type definition, in this case HTMLFormElement.
const input = document.getElementById('to-do-input');
const toDoList = document.getElementById('to-do-list');
const toDos = readToDosFromStorage();
// 1. TS knows in this context that the submit event gets passed the event object.
form === null || form === void 0 ? void 0 : form.addEventListener('submit', (e) => {
    e.preventDefault();
    const newToDo = {
        text: input.value,
        completed: false,
    };
    // Push the new to-do into the toDos array.
    toDos.push(newToDo);
    // Create a new to-do list item by calling the helper function.
    createToDo(newToDo);
    // Clear the input value from the input field.
    input.value = '';
    // Set the new value of the local to-dos array.
    localStorage.setItem('to-dos', JSON.stringify(toDos));
});
// Function to create each to-do item, whether when the page loads or the user submits an item.
function createToDo(toDo) {
    const newLi = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = toDo.completed;
    // Listener to capture the change of the item's checkbox and store it in local storage.
    checkbox.addEventListener('change', () => {
        toDo.completed = checkbox.checked;
        localStorage.setItem('to-dos', JSON.stringify(toDos));
    });
    newLi.append(toDo.text);
    newLi.append(checkbox);
    toDoList === null || toDoList === void 0 ? void 0 : toDoList.append(newLi);
}
// 2. But TS doesn't know what the event object is when a handler function is used, and so the event has to be assigned a type.
function handleSubmit(e) {
    e.preventDefault();
    console.log('Subbmitted');
}
// Render the existent to-dos, if they exist.
function readToDosFromStorage() {
    const localToDosJson = localStorage.getItem('to-dos');
    if (localToDosJson)
        return JSON.parse(localToDosJson);
    else
        return [];
}
;
// Render any extant to-dos on page load.
(function renderExtantToDos(array) {
    if (array.length > 0)
        array.forEach(listItem => createToDo(listItem));
})(toDos);
form === null || form === void 0 ? void 0 : form.addEventListener('submit', handleSubmit);
