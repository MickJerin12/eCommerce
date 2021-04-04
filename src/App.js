import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commerce";
import Products from "./components/Products/Products";
import NavBar from "./components/NavBar/NavBar";

const App = () => {
  const [products, setProducts] = useState([]);
  return (
    <Router>
      <div>
        <NavBar />
        <Products />
      </div>
    </Router>
  );
};
export default App;
