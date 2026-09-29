import {
  addTodo,
  getTodos,
  deleteTodo,
  toggleTodo
} from "./todo";

const form = document.querySelector<HTMLFormElement>("#todoForm");
const input = document.querySelector<HTMLInputElement>("#todoInput");
const list = document.querySelector<HTMLUListElement>("#todoList");

// TypeScript tahu bahwa elemen ini mungkin null
if (!form || !input || !list) {
  throw new Error("Elemen HTML tidak ditemukan.");
}

form.addEventListener("submit", function (event: SubmitEvent): void {
  event.preventDefault();

  const text: string = input.value.trim();

  if (text === "") {
    alert("Tugas tidak boleh kosong.");
    return;
  }

  addTodo(text);
  input.value = "";

  renderTodos();
});

function renderTodos(): void {
  list.innerHTML = "";

  getTodos().forEach(function (todo): void {
    const item: HTMLLIElement = document.createElement("li");

    item.textContent = todo.text;

    if (todo.completed) {
      item.style.textDecoration = "line-through";
    }

    item.addEventListener("click", function (): void {
      toggleTodo(todo.id);
      renderTodos();
    });

    const deleteButton: HTMLButtonElement =
      document.createElement("button");

    deleteButton.textContent = "Hapus";

    deleteButton.addEventListener("click", function (event): void {
      event.stopPropagation();

      deleteTodo(todo.id);
      renderTodos();
    });

    item.appendChild(deleteButton);
    list.appendChild(item);
  });
}

renderTodos();
