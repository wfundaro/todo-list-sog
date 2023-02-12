import useTodos from "../../hooks/useTodos";
import { TodoModel } from "../../models/TodoModel";

const useHome = () => {
  const { todos, update } = useTodos();

  const completedTodoToggle = (todo: TodoModel) => {
    if (!todo.id) return;
    const updateTodo = { ...todo, completed: todo.completed ? 0 : 1 };
    update(updateTodo);
  };

  return {
    todos,
    completedTodoToggle,
  };
};

export default useHome;
