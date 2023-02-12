import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useTodos from "../../hooks/useTodos";
import { TodoModel } from "../../models/TodoModel";

const useCommonEdition = () => {
  const params = useParams();
  const { todos, update, getById, add } = useTodos();
  const [todo, setTodo] = useState<TodoModel>({} as TodoModel);
  const navigate = useNavigate();

  const backButtonClick = () => {
    navigate(-1);
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (!e.target) return;
    const inputs: any = {};

    for (let i = 0; i < e.target.length; i++) {
      const element = e.target[i];
      if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
        inputs[element.name] = element.value;
      }
    }

    const id = params.id;
    // If id is present, we update the todo
    if (id) {
      const todo = todos[0];
      const updateTodo = {
        ...todo,
        ...inputs,
      };
      update(updateTodo);
    } else {
      // If id is not present, we create a new todo
      const newTodo = {
        ...inputs,
        isCompleted: false,
      };
      add(newTodo);
    }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    todo: todo,
    submit,
    backButtonClick,
  };
};

export default useCommonEdition;
