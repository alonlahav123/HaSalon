import React, { useState } from 'react';
import 'firebase/firestore';
import DB from "../firestore";
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';


function ResetButton(props) {
    return(<Button className='ResetButton' onClick={()=>{ResetCapacity()}}>
        <div className='Reset Button'> Reset count to zero</div>
    </Button>);

}
function ResetCapacity(props) {
    let capacitySomething;
    let currentCapacity;
    let meetingRoomTotal;
    DB.collection('simpleData').doc('persons').get().then((doc)=>{doc.data().isMeeting=capacitySomething});
    DB.collection('simpleData').doc('persons').get().then((doc)=>{doc.data().capacity=currentCapacity});
    DB.collection('simpleData').doc('persons').get().then((doc)=>{doc.data().meetingRoomTotal=meetingRoomTotal});


    if (capacitySomething) {
        // if ismeeting is false 
        DB.collection('simpleData').doc('persons').update({amountOfPeople:0, capacity:(currentCapacity+meetingRoomTotal), isMeeting: false, meetingCapacity:0});        
    }else{
        DB.collection('simpleData').doc('persons').update({amountOfPeople:0, isMeeting: false, meetingCapacity:0});
    }
    // meetingRoomTotal
}
export default ResetButton;