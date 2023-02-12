import TodoCard from "../../components/TodoCard/TodoCard";
import * as CircleButton from "../../components/CircleButton/CircleButton";
import useHome from "./useHome";

import "./Home.css";

const Home = () => {
  const { todos, completedTodoToggle } = useHome();

  return (
    <div className="home-container">
      <div className="top">
        <CircleButton.Add onClick={() => {}} />
        <h2>Liste de vos tâches</h2>
      </div>

      <div className="todo-list" data-testid="home-todo-list">
        {todos.map((todo) => {
          return (
            <TodoCard
              key={todo.id}
              todo={todo}
              completedEvent={completedTodoToggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
