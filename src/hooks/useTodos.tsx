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
    const todos = await todoService.getTodos();
    setTodos([...todos]);
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

  const add = async (todo: TodoModel): Promise<TodoModel | undefined> => {
    const newTodo = await todoService.add(todo);
    setTodos([...todos, newTodo as TodoModel]);
    return newTodo as TodoModel;
  };

  useEffect(() => {
    init();
  }, []);

  return {
    todos,
    update,
    getById,
    add,
  };
};
export default useTodos;
