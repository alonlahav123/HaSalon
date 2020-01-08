import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/home';
import Tracker from './pages/tracker';
import FrontDesk from './pages/frontDesk';

export default function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/tracker">Tracker</Link>
            </li>
            <li>
              <Link to="/frontdesk">Front Desk</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tracker">
            <Tracker />
          </Route><Route path="/frontdesk">
            <FrontDesk />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

