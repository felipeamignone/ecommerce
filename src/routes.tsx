import React from "react";
import { Route, Switch } from "react-router-dom";
import Cart from "./pages/Cart";
import Details from "./pages/Details";
import Landing from "./pages/Landing";

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Landing} />
      <Route path="/cart" exact component={Cart} />
      <Route path="/detail" exact component={Details} />
    </Switch>
  );
};

export default Routes;
