import React from "react";
import "./App.css";
import Wrapper from "./Wrapper";
import Checkout_pag from "./Checkout_pag";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={<Wrapper />} />
          <Route path="/checkout" element={<Checkout_pag />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
