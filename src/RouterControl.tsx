import { Route, Routes } from "react-router-dom";
import CompleteDisplayTodo from "./pages/DetailsTodo/DetailsTodo";
import Home from "./pages/Home/Home";

const RouterControl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id" element={<CompleteDisplayTodo />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default RouterControl;
