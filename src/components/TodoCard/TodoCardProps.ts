import { TodoModel } from "../../models/TodoModel";

export interface TodoCardProps {
  todo: TodoModel;
  completedEvent?: (todo: TodoModel) => void;
  cardClick?: (id: number) => void;
  deleteEvent?: (id: number) => void;
  editEvent?: (id: number) => void;
}
