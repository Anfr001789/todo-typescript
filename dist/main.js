import { addTodo, getTodos, deleteTodo, toggleTodo } from "./todo.js";
// Mengambil elemen HTML
const form = document.querySelector("#todoForm");
const input = document.querySelector("#todoInput");
const list = document.querySelector("#todoList");
// Memastikan semua elemen HTML ditemukan
if (form === null || input === null || list === null) {
    throw new Error("Elemen HTML tidak ditemukan.");
}
// Menangani submit form
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const text = input.value.trim();
    if (text === "") {
        alert("Tugas tidak boleh kosong.");
        return;
    }
    addTodo(text);
    input.value = "";
    renderTodos();
});
// Menggambar daftar tugas ke halaman
function renderTodos() {
    list.innerHTML = "";
    const todos = getTodos();
    if (todos.length === 0) {
        const emptyItem = document.createElement("li");
        emptyItem.textContent = "Belum ada tugas.";
        list.appendChild(emptyItem);
        return;
    }
    todos.forEach(function (todo) {
        const item = document.createElement("li");
        const textElement = document.createElement("span");
        textElement.textContent = todo.text;
        if (todo.completed) {
            textElement.style.textDecoration = "line-through";
        }
        textElement.addEventListener("click", function () {
            toggleTodo(todo.id);
            renderTodos();
        });
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Hapus";
        deleteButton.addEventListener("click", function (event) {
            // Mencegah click pada tombol dianggap sebagai click pada item
            event.stopPropagation();
            deleteTodo(todo.id);
            renderTodos();
        });
        item.appendChild(textElement);
        item.appendChild(deleteButton);
        list.appendChild(item);
    });
}
// Menampilkan data awal
renderTodos();
