import React, { useState } from 'react';
import './meetingToggle.css';
import 'firebase/firestore';
import Toggle from 'react-bootstrap/ToggleButton';
import DB from "../firestore";

function meetingToggle(props){
    return (
        <Toggle className='btn' onClick={() => {updateCapacity(props.boolean)}} variant='primary' active>{props.sign}</Toggle>
    )

}
function updateCapacity(boolean) {

    DB.collection('simpleData').doc('persons').get().then( function(doc) {
        let isMeeting = doc.data().isMeeting;
        
        if(isMeeting = false || boolean >= true) {
            DB.collection('simpleData').doc('persons').update({
                amountOfPeople: firebase.firestore.FieldValue.increment(multiplier)
            });
        } 
    })
}

export default capacityButton;