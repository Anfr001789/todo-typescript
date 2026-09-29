"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todo_1 = require("./todo");
const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
// TypeScript tahu bahwa elemen ini mungkin null
if (!form || !input || !list) {
    throw new Error("Elemen HTML tidak ditemukan.");
}
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") {
        alert("Tugas tidak boleh kosong.");
        return;
    }
    (0, todo_1.addTodo)(text);
    input.value = "";
    renderTodos();
});
function renderTodos() {
    list.innerHTML = "";
    (0, todo_1.getTodos)().forEach(function (todo) {
        const item = document.createElement("li");
        item.textContent = todo.text;
        if (todo.completed) {
            item.style.textDecoration = "line-through";
        }
        item.addEventListener("click", function () {
            (0, todo_1.toggleTodo)(todo.id);
            renderTodos();
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.addEventListener("click", function (event) {
            event.stopPropagation();
            (0, todo_1.deleteTodo)(todo.id);
            renderTodos();
        });
        item.appendChild(deleteButton);
        list.appendChild(item);
    });
}
renderTodos();
//# sourceMappingURL=main.js.map