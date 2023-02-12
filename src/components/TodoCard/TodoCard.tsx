import { TodoCardProps } from "./TodoCardProps";
import "./TodoCard.css";
import checkIcon from "../../assets/checkmark_icon.svg";
import editIcon from "../../assets/edit_icon.svg";
import deleteIcon from "../../assets/delete_icon.svg";
import { TodoModel } from "../../models/TodoModel";

const TodoCard = ({ todo, completedEvent, cardClick }: TodoCardProps) => {
  const completeButtonClick = (todo: TodoModel) => {
    if (completedEvent) {
      completedEvent(todo);
    }
  };

  const cardClickEvent = (id: number | undefined) => {
    if (cardClick && id) {
      cardClick(id);
    }
  };

  return (
    <div className="todo-card" data-testid="todo-card">
      <button
        className="btn btn-completed"
        data-testid="btn-completed"
        onClick={() => completeButtonClick(todo)}
      >
        {todo.completed === 1 && <img src={checkIcon} alt="check todo" />}
      </button>
      <div className="title-card" title="Cliquez pour agrandir" onClick={() => cardClickEvent(todo.id)}>
        <p>{todo.title}</p>
      </div>
      <div className="btn-edit-delete-container">
        <button className="btn  btn-edit" data-testid="btn-edit">
          <img src={editIcon} alt="edit todo" />
        </button>
        <button className="btn btn-delete" data-testid="btn-delete">
          <img src={deleteIcon} alt="delete todo" />
        </button>
      </div>
    </div>
  );
};

export default TodoCard;
