import React, { useState } from 'react';
import './capacityCounter.css';
import 'firebase/firestore';
import DB from "../firestore";
import {
    Card,
} from "react-bootstrap";
import * as firebase from "firebase";


function CouchPointsWallet(props) {
    const [usersCouchPoints, setUsersCouchPoints] = useState(0);
    const [loginState, setLoginState] = useState(false);
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            setLoginState(true)
        } else {
            setLoginState(false)
        }
    });
    firebase.auth().onAuthStateChanged(function (user) {
        if (user != null) {
            console.log(user.uid);
            DB.collection("users").doc(user.uid).onSnapshot((doc) => {
                setUsersCouchPoints(doc.data().userCouchPoints);
                console.log(usersCouchPoints)
            });
        } else {
            console.log("USER IS NULL")
        }
    });
    return(
        <div>
        {loginState ? <IsLogin usersCouchPoints={usersCouchPoints}/> : <IsNotLogin/>}
        </div>
    );

/*     return(
    <div>
        <Card>
            <Card.Header>CouchPouch™</Card.Header>
            <Card.Body>
                <Card.Title>Your Couch Points Balence</Card.Title>
                <Card.Text>
                {usersCouchPoints}
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    ); */
};

function IsLogin(props){
    return(
                    <div>
                        <Card>
                            <Card.Header>CouchPouch™</Card.Header>
                            <Card.Body>
                                <Card.Title>Your Couch Points Balance</Card.Title>
                                <Card.Text>
                                {props.usersCouchPoints}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
    );
}

function IsNotLogin(props){
    return(
                    <div>
                        <Card>
                            <Card.Header>CouchPouch™</Card.Header>
                            <Card.Body>
                                <Card.Title>Please Login to view this page</Card.Title>
                                <Card.Text>
                                please <a href="/login">Login</a> before visiting this page
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
    );
}


export default CouchPointsWallet;