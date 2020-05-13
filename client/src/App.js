import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import About from "./components/About";
import SinglePhoto from "./components/SinglePhoto";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/photo" component={Gallery} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/photo/:photoId" component={SinglePhoto} />
          <Route exact path="/product/:productId" component={SingleProduct} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
