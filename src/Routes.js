import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Film from "./pages/features/Films";
import People from "./pages/features/People";
import Planets from "./pages/features/Planets";
import StarShips from "./pages/features/StarsShips";
import Species from "./pages/features/Species";
import Vehicles from "./pages/features/Vehicles";
const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/films">
        <Film />
      </Route>
      <Route exact path="/people">
        <People />
      </Route>
      <Route exact path="/planets">
        <Planets />
      </Route>
      <Route exact path="/starships">
        <StarShips />
      </Route>
      <Route exact path="/species">
        <Species />
      </Route>
      <Route exact path="/vehicles">
        <Vehicles />
      </Route>
    </Switch>
  );
};

export default Routes;
