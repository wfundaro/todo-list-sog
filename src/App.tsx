import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/Loader/Loader";

import "./App.css";
import Header from "./components/Header/Header";
import RouterControl from "./RouterControl";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<Loader />}>
        <RouterControl />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
