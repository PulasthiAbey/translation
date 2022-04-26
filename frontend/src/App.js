import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// import HomeScreen from "./screens/HomeScreen";
import Body from "./components/Body/Body";
import ConverterScreen from "./screens/ConverterScreen";
import Navigation from "./components/navBar";
import Home from "./pages/home";
import About from "./pages/about";

function App() {
  return (
    <div className="App">
      <Navigation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/selector" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/convert-text" element={<ConverterScreen />} />
          <Route path="/convert-written" element={<ConverterScreen />} />
          <Route path="/convert-printed" element={<ConverterScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
