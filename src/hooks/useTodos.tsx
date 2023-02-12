import { useEffect, useState } from "react";
import { TodoModel } from "../models/TodoModel";
import todoService from "../services/todoService";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const init = async (): Promise<void> => {
    const todos = await todoService.getTodos();
    setTodos([...todos]);
  };

  const update = async (todo: TodoModel): Promise<void> => {
    await todoService.update(todo);
    const otherTodos = todos.filter((t) => t.id !== todo.id);
    sortTodos([...otherTodos, todo]);
  };

  const getById = async (id: number): Promise<TodoModel | undefined> => {
    const todo = await todoService.findById(id);
    if (todo) {
      setTodos([todo as TodoModel]);
    }
    return todo as TodoModel;
  };

  const sortTodos = (todosToSort: TodoModel[]) => {
    const sortTodoNotCompleted = todosToSort
      .filter((t) => t.completed === 0)
      .sort((a, b) => (a.title < b.title ? -1 : 1));

    const sortTodoCompleted = todosToSort
      .filter((t) => t.completed === 1)
      .sort((a, b) => (a.title < b.title ? -1 : 1));

    setTodos([...sortTodoNotCompleted, ...sortTodoCompleted]);
  };

  useEffect(() => {
    init();
  }, []);

  return {
    todos,
    update,
    getById,
  };
};
export default useTodos;
