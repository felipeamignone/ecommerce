import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Cart from "./pages/Cart";
import Landing from './pages/Landing';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Landing}/>
            <Route path="/cart" exact component={Cart}/>
        </Switch>
    </BrowserRouter>
  );
}

export default Routes;