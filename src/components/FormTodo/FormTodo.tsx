import { useEffect, useState } from "react";
import { TodoModel } from "../../models/TodoModel";
import "./FormTodo.css";

export interface FormTodoProps {
  todo: TodoModel;
  submit: (e: any) => void;
}
const FormTodo = (props: FormTodoProps) => {
  const { todo, submit } = props;
  const [inputStates, setInputStates] = useState<TodoModel>(todo);

  const updateTitle = (e: any) => {
    if (!e.target) return;
    const title = e.target.value;
    setInputStates({
      ...inputStates,
      title,
    });
  };

  const updateDescription = (e: any) => {
    if (!e.target) return;
    const description = e.target.value;
    setInputStates({
      ...inputStates,
      description,
    });
  };

  useEffect(() => {
    setInputStates(todo);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todo]);

  return (
    <form action="PATCH" onSubmit={submit}>
      <div className="form-group">
        <label htmlFor="input-title">Titre</label>
        <input
          type="text"
          name="title"
          id="input-title"
          value={inputStates.title ?? ""}
          onChange={updateTitle}
          autoComplete="off"
          data-testid="input-title"
          required
          placeholder="Titre de la tâche"
        />
      </div>
      <div className="form-group">
        <label htmlFor="input-description">Description</label>
        <textarea
          name="description"
          id="input-description"
          value={inputStates.description ?? ""}
          onChange={updateDescription}
          rows={6}
          autoComplete="off"
          data-testid="input-description"
          placeholder="Description de la tâche"
        />
      </div>
      <div className="form-group">
        <button
          className="btn-edit-submit"
          type="submit"
          data-testid="form-todo-btn-submit"
        >
          Sauvegarder
        </button>
      </div>
    </form>
  );
};

export default FormTodo;
