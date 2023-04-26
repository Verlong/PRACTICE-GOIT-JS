// 3. Викоритовуй шаблон списку завдань з файлу todoList.html
//  для створення функціоналу для списку завдань.
//  Використовуй поширення подій.

const form = document.querySelector('form');
const input = document.querySelector('#input');
const ul = document.querySelector('#list');

// Function to create new task element, return LI element
const createNewTaskElement = value => {
  const todoMarkup = `
        <li>
          <input disabled value="${value}"/>
          <div>
            <button data-action="edit">Edit</button>
            <button data-action="delete">Delete</button>
          </div>
        </li>
        `;

  return todoMarkup;
};

// Function to handle submit action
function handleSubmit() {}

// Function to add a task to the list (use createNewTaskElement)
function addTask() {}

// Function to delete a task from the list
function deleteTask() {}

// Function to edit a task (toggle class active, if button EDIT has class active:
// change button textContent to "Save", add class "active" for button
// add class "active" for input, and remove "disabled" attribute
// else do reverse actions
function editTask() {}

form.addEventListener('submit', handleSubmit);
ul.addEventListener('click', editTask);
ul.addEventListener('click', deleteTask);
