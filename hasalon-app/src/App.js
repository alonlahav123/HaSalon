import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import DB from "./firestore.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  DropdownButton,
  MenuItem
} from "react-bootstrap";

import Home from "./pages/home";
import FrontDesk from "./pages/frontDesk";

import Registration from "./pages/registration";
import Login from "./pages/login";
import ResetPassword from "./pages/resetpassword";
import Wallet from "./pages/wallet";
import Admin from "./pages/admin";
import Tracker from "./pages/tracker.js";

export default function App() {


  return (
    <Router>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/tracker">
            <Tracker />
          </Route>
          <Route path="/frontdesk">
            <FrontDesk />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/forgot">
            <ResetPassword />
          </Route>
          <Route path="/wallet">
            <Wallet />
          </Route>
          <Route path="/admin">
            <Admin />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

