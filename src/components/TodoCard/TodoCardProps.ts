import { TodoModel } from "../../models/TodoModel";

export interface TodoCardProps {
  todo: TodoModel;
  completedEvent?: (todo: TodoModel) => void;
}
