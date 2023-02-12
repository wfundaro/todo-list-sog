import useCompleteDisplayTodo from "./useDetailsTodo";
import * as CircleButton from "../../components/CircleButton/CircleButton";

import "./DetailsTodo.css";

const DetailsTodo = () => {
  const { todo, backButtonClick } = useCompleteDisplayTodo();
  return (
    <div className="complete-display-todo-container">
      <div className="top">
        <CircleButton.Back onClick={backButtonClick} />
        <h2>Visualisation de la tâche</h2>
      </div>
      <div className="complete-todo-card">
        <p>{todo.title}</p>
        <p className="complete-description-card">{todo.description}</p>
      </div>
    </div>
  );
};

export default DetailsTodo;
