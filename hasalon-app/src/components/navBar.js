import React, { useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import DB from "../firestore.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useHistory } from "react-router-dom";
import { withRouter } from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavItem,
  MenuItem
} from "react-bootstrap";

function NavBar(props){
    const [loginState, setLoginState] = useState(false);
    const [userType, setUserType] = useState(0);
    let history = useHistory();
    firebase.auth().onAuthStateChanged(user => {
        if (user) {
        setLoginState(true);
        } else {
        setLoginState(false);
        }
    });
    firebase.auth().onAuthStateChanged(function(user) {
        if (user != null) {
        console.log(user.uid);
        DB.collection("users")
            .doc(user.uid)
            .onSnapshot(doc => {
            setUserType(doc.data().userType);
            console.log(userType);
            });
        } else {
        console.log("USER IS NULL");
        }
    });

    return(
    <div>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="/">
            <img src="./NavBarLogoWhite.png" width="105" height="40" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {/* <Nav.Link href="/tracker">Tracker</Nav.Link> */}
            </Nav>

            {loginState ? (
              <LoggedInUserNav userType={userType} history={history} />
            ) : (
              <RegularUserNav />
            )}

            {/* <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form> */}
          </Navbar.Collapse>
        </Navbar>
    </div>
    )
}

function LoggedInUserNav(props) {
  let history = props.history;
  if (props.userType == 1) {
    return (
      <Nav>
        <Nav.Link href="/frontdesk" key={`4`}>
          Front Desk Controls
        </Nav.Link>
        <Nav.Link href="/admin" key={`3`}>
          Admin Panel
        </Nav.Link>
        <Nav.Link href="/wallet" key={`2`}>
          Wallet
        </Nav.Link>
        <Nav.Link onClick={firebaseLogout} key={`1`}>
          Logout
        </Nav.Link>
      </Nav>
    );
  } else if (props.userType == 2) {
    return (
      <Nav>
        <Nav.Link href="/frontdesk" key={`3`}>
          Front Desk Controls
        </Nav.Link>
        <Nav.Link href="/wallet" key={`2`}>
          Wallet
        </Nav.Link>
        <Nav.Link onClick={firebaseLogout} key={`1`}>
          Logout
        </Nav.Link>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Nav.Link href="/wallet" key={`2`}>
          Wallet
        </Nav.Link>
        
        <Nav.Link onClick={event => firebaseLogout({history})} key={`1`}>
          Logout
        </Nav.Link>
      </Nav>
    );
  }
}

function firebaseLogout(history) {
    firebase.auth().signOut();
}

function RegularUserNav() {
  return (
    <Nav>
      <Nav.Link href="/login" key={`1`}>
        Login
      </Nav.Link>
    </Nav>
  );
}


export default NavBar