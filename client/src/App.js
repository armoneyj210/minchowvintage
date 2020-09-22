import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Photos from "./components/Photos";
import About from "./components/About";
import SinglePhoto from "./components/SinglePhoto";
import Products from "./components/Products";
import SingleProduct from "./components/SingleProduct";
import "./App.css";
import Footer from "./components/Footer";
import Term from "./components/Terms";
import Tips from "./components/Tips";
function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <NavBar />
        </div>
        <Switch>
          <Route exact path="/photo" component={Photos} />
          <Route exact path="/about" component={About} />
          <Route exact path="/product" component={Products} />
          <Route exact path="/photo/:photoId" component={SinglePhoto} />
          <Route exact path="/product/:productId" component={SingleProduct} />
          <Route exact path="/terms" component={Term} />
          <Route exact path="/tips" component={Tips} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
