import { TodoModel } from "../models/TodoModel";

export default class HttpHelper {
  private static subscribers: any[] = [];

  static subscribe(subscriber: any) {
    this.subscribers.push(subscriber);
  }

  static unsubscribe(subscriber: any) {
    this.subscribers = this.subscribers.filter((e) => e !== subscriber);
  }

  private static sendToSubscriber(isActivity: boolean) {
    this.subscribers.forEach((element) => {
      element(isActivity);
    });
  }

  private static createDataRequest(
    method: string,
    body: {},
    optionHeader: {} = {},
    contentType: string = "application/json"
  ): {} {
    let data: {} = {
      method: method,
      mode: "cors",
      cache: "default",
      headers: {
        "Content-Type": contentType,
        ...optionHeader,
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
    };
    if (body) {
      data = { ...data, body: JSON.stringify(body) };
    }
    return data;
  }

  private static async customFetch(
    url: string,
    method: string,
    body: {},
    optionHeader: {} = {},
    timeOut: number = 4000
  ): Promise<Response> {
    this.sendToSubscriber(true);
    const abortController = new AbortController();

    const idTimeOut = setTimeout(() => {
      this.sendToSubscriber(false);
      abortController.abort();
    }, timeOut);

    const response = await fetch(url, {
      ...this.createDataRequest(method, body, optionHeader),
      signal: abortController.signal,
    });

    clearTimeout(idTimeOut);
    this.sendToSubscriber(false);
    return response;
  }

  static async get(
    url: string,
    body: {},
    optionHeader: {} = {}
  ): Promise<TodoModel[]> {
    const response = await this.customFetch(url, "GET", body, optionHeader);
    return await response.json();
  }

  static async post(
    url: string,
    body: {},
    optionHeader: {} = {}
  ): Promise<TodoModel[]> {
    const response = await this.customFetch(url, "POST", body, optionHeader);
    return await response.json();
  }

  static async put(
    url: string,
    body: {},
    optionHeader: {} = {}
  ): Promise<TodoModel[]> {
    const response = await this.customFetch(url, "PUT", body, optionHeader);
    return await response.json();
  }

  static async delete(
    url: string,
    body: {},
    optionHeader: {} = {}
  ): Promise<void> {
    const response = await this.customFetch(url, "DELETE", body, optionHeader);
    return await response.json();
  }
}
