import HttpHelper from "../helpers/HttpHelper";
import { TodoModel } from "../models/TodoModel";
import { TodoStore } from "../store/TodoStore";

const BACK_URL = process.env.REACT_APP_BACK_URL;
const STORE = process.env.REACT_APP_STORE;

class TodoService {
  async add(todo: TodoModel) {
    if (STORE === "store") {
      return TodoStore.getInstance().add(todo);
    }
    try {
      const response = await HttpHelper.post(`${BACK_URL}/todos` ?? "", todo);
      return response;
    } catch (err) {
      console.error(err);
      // add throw etc.
    }
    return todo;
  }

  async getTodos() {
    if (STORE === "store") {
      return TodoStore.getInstance().getAll();
    }
    const todos = await HttpHelper.get(`${BACK_URL}/todos` ?? "", "");
    return todos;
  }

  async findById(id: number) {
    if (STORE === "store") {
      return TodoStore.getInstance().getById(id);
    }
    try {
      const response = await HttpHelper.get(
        `${BACK_URL}/todos/${id}` ?? "",
        ""
      );
      return response;
    } catch (error) {
      console.error(error);
      // add throw etc.
    }
  }

  async update(todo: TodoModel) {
    if (STORE === "store") {
      return TodoStore.getInstance().update(todo);
    }
    try {
      const response = await HttpHelper.put(`${BACK_URL}/todos` ?? "", todo);
      return response;
    } catch (err) {
      console.error(err);
      // add throw etc.
    }
  }

  async delete(id: number) {
    if (STORE === "store") {
      return TodoStore.getInstance().delete(id);
    }
    try {
      const response = await HttpHelper.delete(
        `${BACK_URL}/todos/${id}` ?? "",
        ""
      );
      return response;
    } catch (err) {
      console.error(err);
      // add throw etc.
    }
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new TodoService();
