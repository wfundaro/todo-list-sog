import { TodoModel } from "../models/TodoModel";
import todos from "../data/todos";

export class TodoStore {
  private static instance: TodoStore;
  private todos: TodoModel[] = [];

  static getInstance() {
    if (!TodoStore.instance) {
      TodoStore.instance = new TodoStore();
      TodoStore.instance.fillTodos(todos);
    }
    return TodoStore.instance;
  }

  fillTodos(todos: TodoModel[]) {
    TodoStore.getInstance().todos = todos;
    // this.sortTodos();
  }

  add(todo: TodoModel) {
    const newId =
      Math.max(...TodoStore.getInstance().todos.map((t) => t.id ?? 1)) + 1;
    const newTodo = { ...todo, id: newId };
    TodoStore.getInstance().todos.unshift(newTodo);
    return newTodo;
  }

  update(todo: TodoModel) {
    const instance = TodoStore.getInstance();
    const otherTodos = instance.todos.filter((t) => t.id !== todo.id);
    todo.completed === 1 ? otherTodos.push(todo) : otherTodos.unshift(todo);
    TodoStore.getInstance().fillTodos(otherTodos);
    // const index = instance.todos.findIndex((t) => t.id === todo.id);
    // instance.todos[index] = todo;
    // this.sortTodos();
  }

  delete(id: number) {
    const instance = TodoStore.getInstance();
    instance.todos = instance.todos.filter((t) => t.id !== id);
    // this.sortTodos();
  }

  getAll() {
    return TodoStore.getInstance().todos;
  }

  getById(id: number) {
    return TodoStore.getInstance().todos.find((t) => t.id === id);
  }

  sortTodos() {
    const sortTodoNotCompleted = TodoStore.getInstance()
      .todos.filter((t) => t.completed === 0)
      .sort((a, b) => (a.title < b.title ? -1 : 1));

    const sortTodoCompleted = TodoStore.getInstance()
      .todos.filter((t) => t.completed === 1)
      .sort((a, b) => (a.title < b.title ? -1 : 1));

    TodoStore.getInstance().todos = [
      ...sortTodoNotCompleted,
      ...sortTodoCompleted,
    ];
  }
}
