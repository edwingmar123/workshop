import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Collection from "./components/Collection";
import Profile from "./components/Profile";
import Login from "./components/Login";
import Register from "./components/Register";
import NavBar from "./components/NavBar";
import Footers from "./components/Footers";

function App() {
  // Estado para gestionar el inicio de sesión
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      {/* Barra de navegación */}
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      {/* Definición de rutas */}
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/home" element={<Home />} />
      </Routes>
      {/* Pie de página */}
      <Footers />
    </BrowserRouter>
  );
}

export default App;
