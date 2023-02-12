import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import Home from "./pages/Home/Home";
import TodoCard from "./components/TodoCard/TodoCard";
import todos from "./data/todos";

describe("App Home", () => {
  it("renders Header", async () => {
    render(<App />);
    const atmaTitle = await screen.findByText("ATMA").then((e) => e);
    expect(atmaTitle).toBeInTheDocument();
  });

  it("renders Home", async () => {
    render(<Home />);
    const homeDiv = await screen.findByTestId("home-todo-list").then((e) => e);
    expect(homeDiv).toBeInTheDocument();
    screen.findAllByText(/Liste de vos tâches/i).then((e) => e);
  });

  it("count TodoCard", async () => {
    render(<Home />);
    const todoCard = await screen.findAllByTestId("todo-card").then((e) => e);
    expect(todoCard).toHaveLength(todos.length);
  });

  it("check completed card", async () => {
    render(<Home />);
    const todoCard = await screen.findAllByTestId("todo-card").then((e) => e);
    expect(todoCard).toHaveLength(todos.length);

    const imgRepresentCompleted = await screen
      .findAllByAltText("check todo")
      .then((e) => e);
    expect(imgRepresentCompleted).toHaveLength(1);
  });

  it("todo card completed button", async () => {
    render(<Home />);
    const todoCardCompletedButtons = await screen
      .findAllByTestId("btn-completed")
      .then((e) => e);
    expect(todoCardCompletedButtons).toHaveLength(todos.length);
  });
});
