export interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
export declare function addTodo(text: string): Todo;
export declare function getTodos(): Todo[];
export declare function deleteTodo(id: number): void;
export declare function toggleTodo(id: number): void;
//# sourceMappingURL=todo.d.ts.map