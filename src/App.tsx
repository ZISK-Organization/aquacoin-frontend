import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Info from "./Pages/Info/Info";
import Registration from "./Pages/Registration/Registration";
import Login from "./Pages/Login/Login";
import Team from "./Pages/Team/Team";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Info" element={<Info />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
