import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
// @ts-expect-error ts-migrate(7016) FIXME: Could not find a declaration file for module 'reac... Remove this comment to see the full error message
} from "react-router-dom";

// components
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/Restaurants.jsx' was resolved... Remove this comment to see the full error message
import { Restaurants } from './containers/Restaurants.jsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/Foods.jsx' was resolved to '/... Remove this comment to see the full error message
import { Foods } from './containers/Foods.jsx';
// @ts-expect-error ts-migrate(6142) FIXME: Module './containers/Orders.jsx' was resolved to '... Remove this comment to see the full error message
import { Orders } from './containers/Orders.jsx';

function App() {
  return (
    // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Router>
      {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
      <Switch>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route
          exact
          path="/restaurants">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Restaurants />
        </Route>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route
          exact
          path="/foods"
        >
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Foods />
        </Route>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route
          exact
          path="/orders">
          {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
          <Orders />
        </Route>
        {/* @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message */}
        <Route
          exact
          path="/restaurants/:restaurantsId/foods"
          render={({
            match
          }: any) =>
            // @ts-expect-error ts-migrate(17004) FIXME: Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Foods
              match={match}
            />
          }
        />
      </Switch>
    </Router>
  );
}

export default App;
