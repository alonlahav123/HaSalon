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
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            if (user != null) {
                console.log(user.uid);
                DB.collection("users").doc(user.uid).onSnapshot((doc) => {
                    setUsersCouchPoints(doc.data().userCouchPoints);
                    console.log(usersCouchPoints)
                });
            } else {
                console.log("USER IS NULL")
            }
        } else {
            // No user is signed in.
            console.log("null")
        }
    });


    return(
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
    );
};

export default CouchPointsWallet;