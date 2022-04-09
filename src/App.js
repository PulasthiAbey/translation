import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomeScreen from "./screens/HomeScreen";
import ConverterScreen from "./screens/ConverterScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<HomeScreen />} />
          <Route path="/convert" element={<ConverterScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
