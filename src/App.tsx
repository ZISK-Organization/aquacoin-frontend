import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Info from "./Pages/Info/Info";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
