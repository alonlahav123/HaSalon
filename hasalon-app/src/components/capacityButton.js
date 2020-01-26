import React, {useState} from 'react';
import './capacityButton.css';
import DB from '../firestore';
import Button from 'react-bootstrap/Button';
import firebase from 'firebase/app';

function capacityButton(props) {
    return (
        <Button className='capButton' onClick={() => {updateCapacity(props.multiplier)}} variant='primary' size='lg'>
            <div className='text'>{props.sign}</div>
        </Button>
    )

}

function updateCapacity(multiplier) {
    DB.collection('simpleData').doc('persons').get().then( function(doc) {
        let amntPeople = doc.data().amountOfPeople;

        if(amntPeople > 0 || multiplier >= 0) {
            DB.collection('simpleData').doc('persons').update({
                amountOfPeople: firebase.firestore.FieldValue.increment(multiplier)
            });
        } 
        
    })
}

export default capacityButton;