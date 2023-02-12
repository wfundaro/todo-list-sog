import { useNavigate } from "react-router-dom";
import useTodos from "../../hooks/useTodos";
import { TodoModel } from "../../models/TodoModel";

const useHome = () => {
  const { todos, update } = useTodos();
  const navigate = useNavigate();

  const completedTodoToggle = (todo: TodoModel) => {
    if (!todo.id) return;
    const updateTodo = { ...todo, completed: todo.completed ? 0 : 1 };
    update(updateTodo);
  };

  const cardClick = (id: number) => {
    navigate(`/todo/${id}`);
  };

  return {
    todos,
    completedTodoToggle,
    cardClick
  };
};

export default useHome;
