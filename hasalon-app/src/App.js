import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {
  Navbar,
  Nav,
  NavDropdown,
  NavItem,
  DropdownButton,
  MenuItem,
} from 'react-bootstrap';


import Home from './pages/home';
import FrontDesk from './pages/frontDesk';
import Registration from './pages/registration'
import Login from './pages/login'
import ResetPassword from './pages/resetpassword'
import Wallet from './pages/wallet'

// _+ on keyboard for +_ people in capacity buttons


export default function App() {
  
  const [loginState, setLoginState] = useState(false);

  firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          setLoginState(true)
          }
          else {
          setLoginState(false)
          }
  });

  return (
    <Router>
      <div>
{/*         <nav>
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
        </nav> */}
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">הסלון</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/*<Nav.Link href="/tracker">Tracker</Nav.Link>*/}
            </Nav>
            
              {loginState ? <LoggedInUserNav/> : <RegularUserNav/>}
            
            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          {/*<Route path="/tracker">
            <Tracker />
          </Route>*/}
          <Route path="/frontdesk">
            <FrontDesk />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/forgot">
            <ResetPassword/>
          </Route>
          <Route path="/wallet">
            <Wallet/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function LoggedInUserNav(){
  return(
   <Nav>  
  <Nav.Link href="/wallet" key={`2`}>Wallet</Nav.Link>
  <Nav.Link onClick={firebaseLogout} key={`1`}>Logout</Nav.Link>
  </Nav>
  );
}
function firebaseLogout(){
  firebase.auth().signOut();
}
function RegularUserNav() {
  return(
    <Nav>
    <Nav.Link href="/login" key={`1`}>Login</Nav.Link>
    </Nav>
  );
}