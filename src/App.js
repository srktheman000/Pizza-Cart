import React from "react";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components.js/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} exact></Route>
          {/* <Route path="/about" element={<About />}></Route> */}
          <Route path="/products" element={<Products />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
