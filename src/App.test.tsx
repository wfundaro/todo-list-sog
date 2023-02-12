import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import Home from "./pages/Home/Home";
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
    const todoCard = await screen.findAllByTestId("todo-card");
    expect(todoCard).toHaveLength(todos.length);
    const titleCardExists = screen.getByText(/Learn Vue/i);
    expect(titleCardExists).toBeInTheDocument();
  });

  it("check completed card", async () => {
    render(<Home />);
    const todoCard = await screen.findAllByTestId("todo-card");
    expect(todoCard).toHaveLength(todos.length);

    const imgRepresentCompleted = await screen.findAllByAltText("check todo");
    expect(imgRepresentCompleted).toHaveLength(1);
  });

});
