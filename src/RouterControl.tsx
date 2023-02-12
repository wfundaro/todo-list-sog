import { Route, Routes } from "react-router-dom";
import AddTodo from "./pages/AddTodo/AddTodo";
import DetailsTodo from "./pages/DetailsTodo/DetailsTodo";
import EditTodo from "./pages/EditTodo/EditTodo";
import Home from "./pages/Home/Home";

const RouterControl = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todo/:id/edit" element={<EditTodo />} />
      <Route path="/todo/add" element={<AddTodo />} />
      <Route path="/todo/:id" element={<DetailsTodo />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};

export default RouterControl;
