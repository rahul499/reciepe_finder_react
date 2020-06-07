import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from "../App";
import Rec from "./Rec";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/recipe/:id" component={Rec} />
    </Switch>
  </BrowserRouter>
);

export default Router;



