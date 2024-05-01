import React from "react";
import "./components/styling/App.css";
import Home from "./pages/Home";
import Store from "./pages/Store";
import Shipping from "./pages/Shipping";
import Contact from "./pages/Contact";
import Help from "./pages/Help";
import LoginPage from "./pages/LoginPage";
import Register from "./pages/RegisterPage";
import About from "./pages/about";
import Conditions from "./pages/conditions";
import HowToUse from "./pages/how_to_use";
import FilterOption from "./pages/FilterOption";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/">
            {Home}
          </Route>
          <Route exact path="/store" component={Store} />
          <Route exact path="/shipping">
            {Shipping}
          </Route>
          <Route exact path="/contact">
            {Contact}
          </Route>
          <Route exact path="/help">
            {Help}
          </Route>
          <Route exact path="/login">
            {LoginPage}
          </Route>
          <Route exact path="/register">
            {Register}
          </Route>
          <Route exact path="/about">
            {About}
          </Route>
          <Route exact path="/conditions">
            {Conditions}
          </Route>
          <Route exact path="/how_to_use">
            {HowToUse}
          </Route>
          <Route exact path="/Filter-Option" component={FilterOption} />

          <Route exact path="/stre/All"></Route>
          <Route exact path="/store/Featured"></Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
export default App;
