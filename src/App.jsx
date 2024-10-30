import { useState } from "react";
import Landing from "./components/Landing";
import React from "react";
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home />} />

          <Route path="/home" element={<Landing />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
