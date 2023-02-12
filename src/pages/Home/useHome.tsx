import { useNavigate } from "react-router-dom";
import useTodos from "../../hooks/useTodos";
import { TodoModel } from "../../models/TodoModel";

const useHome = () => {
  const { todos, update, deleteById } = useTodos();
  const navigate = useNavigate();

  const completedTodoToggle = (todo: TodoModel) => {
    if (!todo.id) return;
    const updateTodo = { ...todo, completed: todo.completed ? 0 : 1 };
    update(updateTodo);
  };

  const cardClick = (id: number) => {
    navigate(`/todo/${id}`);
  };

  const addButtonClick = () => {
    navigate(`/todo/add`);
  };

  const editTodo = (id: number) => {
    navigate(`/todo/${id}/edit`);
  };

  const deleteTodo = (id: number) => {
    deleteById(id);
  };

  return {
    todos,
    completedTodoToggle,
    cardClick,
    addButtonClick,
    editTodo,
    deleteTodo,
  };
};

export default useHome;
