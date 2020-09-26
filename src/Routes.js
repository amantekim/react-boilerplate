import React, { Fragment } from 'react';
import { BrowserRouter as Switch, Route } from "react-router-dom";
import LandingPage from "./pages/landing"

function Routes() {
  return (
      <Fragment>
        <Switch>
            <Route exact path="/" component={LandingPage} />
          </Switch>
      </Fragment>  
  );
}
export default Routes;
