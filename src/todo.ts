// Menentukan bentuk data sebuah tugas
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

// Array hanya boleh berisi object bertipe Todo
const todos: Todo[] = [];

// Menambahkan tugas baru
export function addTodo(text: string): Todo {
  const newTodo: Todo = {
    id: Date.now(),
    text: text,
    completed: false
  };

  todos.push(newTodo);

  return newTodo;
}

// Mengambil semua tugas
export function getTodos(): Todo[] {
  return todos;
}

// Menghapus tugas berdasarkan id
export function deleteTodo(id: number): void {
  const index: number = todos.findIndex(
    (todo: Todo): boolean => todo.id === id
  );

  if (index !== -1) {
    todos.splice(index, 1);
  }
}

// Mengubah status selesai sebuah tugas
export function toggleTodo(id: number): void {
  const todo: Todo | undefined = todos.find(
    (todo: Todo): boolean => todo.id === id
  );

  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
}
