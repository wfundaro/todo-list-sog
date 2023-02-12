import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTodos from "../../hooks/useTodos";
import { TodoModel } from "../../models/TodoModel";

const useCompleteDisplayTodo = () => {
  const params = useParams();
  const { getById } = useTodos();
  const [todo, setTodo] = useState<TodoModel>({} as TodoModel);
  const navigate = useNavigate();

  const backButtonClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    const id = params.id;
    if (id) {
      getById(+id).then((todo) => {
        if (todo) {
          setTodo(todo);
        }
      });
    }
  }, []);

  return {
    todo,
    backButtonClick,
  };
};

export default useCompleteDisplayTodo;
