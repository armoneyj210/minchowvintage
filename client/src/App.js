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
import Services from "./components/services/Services";
import Contact from "./components/Contact";
import Atv from "./components/services/Atv";
import Street from "./components/services/Street";
import Sbs from "./components/services/Sbs";
import Dirt from "./components/services/Dirt";
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
          <Route exact path="/services" component={Services} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/atv-services" component={Atv} />
          <Route exact path="/street-services" component={Street} />
          <Route exact path="/sidebyside-services" component={Sbs} />
          <Route exact path="/dirt-services" component={Dirt} />
          <Route path="/" component={Home} />
        </Switch>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
