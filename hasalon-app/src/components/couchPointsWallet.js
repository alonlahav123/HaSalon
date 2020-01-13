import React, { useState } from 'react';
import './capacityCounter.css';
import 'firebase/firestore';
import DB from "../firestore";
import {
    Card,
} from "react-bootstrap";
import * as firebase from "firebase";

var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

function CouchPointsWallet(props) {
    const [usersCouchPoints, setUsersCouchPoints] = useState(0);
    if (user != null) {
        uid = user.uid;
        console.log(uid);
        DB.collection("users").doc(uid).onSnapshot((doc) => {
            setUsersCouchPoints(doc.data().userCouchPoints);
        }).catch(function (error) {
            alert(error);
        });
    }
    console.log(uid);
    return(
    <div>
        <Card>
            <Card.Header>Featured</Card.Header>
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