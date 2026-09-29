// Mendefinisikan bentuk data sebuah tugas
export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

// Menentukan bahwa array hanya berisi Todo
const todos: Todo[] = [];

// Parameter text harus berupa string.
// Fungsi mengembalikan object Todo.
export function addTodo(text: string): Todo {
    const todo: Todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);

    return todo;
}

// Fungsi ini mengembalikan array Todo
export function getTodos(): Todo[] {
    return todos;
}

export function deleteTodo(id: number): void {
    const index = todos.findIndex(function (todo: Todo): boolean {
        return todo.id === id;
    });

    if (index !== -1) {
        todos.splice(index, 1);
    }
}

export function toggleTodo(id: number): void {
    const todo = todos.find(function (todo: Todo): Todo | undefined {
        return todo.id === id;
    });

    if (todo) {
        todo.completed = !todo.completed;
    }
}
