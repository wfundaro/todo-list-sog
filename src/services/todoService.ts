import { TodoStore } from "../store/TodoStore";

class TodoService {
  async getTodos() {
    return TodoStore.getInstance().getAll();
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();
