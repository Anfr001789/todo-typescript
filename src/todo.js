"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTodo = addTodo;
exports.getTodos = getTodos;
exports.deleteTodo = deleteTodo;
exports.toggleTodo = toggleTodo;
// Menentukan bahwa array hanya berisi Todo
const todos = [];
// Parameter text harus berupa string.
// Fungsi mengembalikan object Todo.
function addTodo(text) {
    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(todo);
    return todo;
}
// Fungsi ini mengembalikan array Todo
function getTodos() {
    return todos;
}
function deleteTodo(id) {
    const index = todos.findIndex(function (todo) {
        return todo.id === id;
    });
    if (index !== -1) {
        todos.splice(index, 1);
    }
}
function toggleTodo(id) {
    const todo = todos.find(function (todo) {
        return todo.id === id;
    });
    if (todo) {
        todo.completed = !todo.completed;
    }
}
//# sourceMappingURL=todo.js.map