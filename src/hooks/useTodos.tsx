import { useEffect, useState } from "react";
import { TodoModel } from "../models/TodoModel";
import todoService from "../services/todoService";

const useTodos = () => {
  const [todos, setTodos] = useState<TodoModel[]>([]);

  const init = async (): Promise<void> => {
    const todos = await todoService.getTodos();
    setTodos([...todos]);
  };

  useEffect(() => {
    init();
  }, []);

  return {
    todos,
  };
};
export default useTodos;
