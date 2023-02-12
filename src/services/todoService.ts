import { TodoModel } from "../models/TodoModel";
import { TodoStore } from "../store/TodoStore";

class TodoService {
  async getTodos() {
    return TodoStore.getInstance().getAll();
  }

  async update(todo: TodoModel) {
    return TodoStore.getInstance().update(todo);
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();
