import { useEffect, useState } from "react";
import { TodoModel } from "../models/TodoModel";
import todoService from "../services/todoService";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const init = async (): Promise<void> => {
    const todos = await todoService.getTodos();
    sortTodos(todos);
  };

  const update = async (todo: TodoModel): Promise<void> => {
    await todoService.update({ ...todo, updated_at: new Date() });
    if (process.env.REACT_APP_STORE === "store") {
      const todos = await todoService.getTodos();
      sortTodos(todos);
    } else {
      const otherTodos = todos.filter((t) => t.id !== todo.id);
      todo.completed === 1 ? otherTodos.push(todo) : otherTodos.unshift(todo);
      setTodos([...otherTodos]);
    }
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
      .filter((t) => t.completed === 0 || !t.completed)
      .sort((a, b) => {
        const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
        const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
        if (dateA || dateB) {
          return dateA < dateB ? 1 : -1;
        }
        return a.title < b.title ? -1 : 1;
      });

    const sortTodoCompleted = todosToSort
      .filter((t) => t.completed === 1 || t.completed)
      .sort((a, b) => {
        const dateA = a.updated_at ? new Date(a.updated_at).getTime() : 0;
        const dateB = b.updated_at ? new Date(b.updated_at).getTime() : 0;
        if (dateA || dateB) {
          return dateA > dateB ? 1 : -1;
        }
        return a.title < b.title ? -1 : 1;
      });

    setTodos([...sortTodoNotCompleted, ...sortTodoCompleted]);
  };

  const add = async (todo: TodoModel): Promise<TodoModel | undefined> => {
    const newTodo = await todoService.add({ ...todo, updated_at: new Date() });
    setTodos([...todos, newTodo as TodoModel]);
    console.log("newTodo", newTodo);
    return newTodo as TodoModel;
  };

  const deleteById = async (id: number): Promise<void> => {
    await todoService.delete(id);
    const otherTodos = todos.filter((todo) => todo.id !== id);
    setTodos([...otherTodos]);
  };

  useEffect(() => {
    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    todos,
    update,
    getById,
    add,
    deleteById,
  };
};
export default useTodos;
