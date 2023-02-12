import * as CircleButton from "../CircleButton/CircleButton";
import FormTodo from "../FormTodo/FormTodo";
import useCommonEdition from "./useCommonEdition";

import "./CommonEdition.css";

export interface CommonEditionProps {
  title: string;
}
const CommonEdition = (props: CommonEditionProps) => {
  const { todo, submit, backButtonClick } = useCommonEdition();
  const { title } = props;

  return (
    <div
      className="common-edition-todo-container"
      data-testid="common-edition-todo-container"
    >
      <div className="top">
        <CircleButton.Back onClick={backButtonClick} />
        <h2>{title}</h2>
      </div>
      <FormTodo todo={todo} submit={submit} />
    </div>
  );
};

export default CommonEdition;
