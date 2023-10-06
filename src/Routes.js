// src/Routes.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import SectorDetail from "./components/SectorDetail"; // Esta será la vista de detalle del sector

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/sector/:id" component={SectorDetail} />
      </Switch>
    </Router>
  );
};

export default Routes;
