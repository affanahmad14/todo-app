

//Die Variablen verändern nicht Ihr Format, nur ihren Inhalt.
const todoForm = document.querySelector(".todo-form");
const todoInput = document.querySelector(".todo-input");
const todoList = document.querySelector(".todo-list");

//
todoForm.addEventListener("submit", function (event) {
    event.preventDefault()
    const inputText = todoInput.value.trim();
    if(inputText === '') { 
        return;
    } 
    const li = document.createElement("li");
    li.textContent = inputText;
    const deletebutton = document.createElement("button");
    deletebutton.textContent = "löschen";
    deletebutton.addEventListener("click", () => {
    todoList.removeChild(li);
        })

    li.appendChild(deletebutton)
    todoList.appendChild(li);
    input.value = "";
})

