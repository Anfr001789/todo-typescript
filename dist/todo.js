// Array hanya boleh berisi object bertipe Todo
const todos = [];
// Menambahkan tugas baru
export function addTodo(text) {
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false
    };
    todos.push(newTodo);
    return newTodo;
}
// Mengambil semua tugas
export function getTodos() {
    return todos;
}
// Menghapus tugas berdasarkan id
export function deleteTodo(id) {
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
    }
}
// Mengubah status selesai sebuah tugas
export function toggleTodo(id) {
    const todo = todos.find((todo) => todo.id === id);
    if (todo !== undefined) {
        todo.completed = !todo.completed;
    }
}
