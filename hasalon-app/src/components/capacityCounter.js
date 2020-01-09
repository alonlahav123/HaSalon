import React, { useState } from 'react';
import './capacityCounter.css';
import 'firebase/firestore';
import DB from "../firestore";


function CapacityCounter(props) {
    const [peopleInThePlaceNow, setPeopleInThePlaceNow] = useState(0);

    DB.collection('simpleData').doc('persons').onSnapshot((doc) => {
        setPeopleInThePlaceNow(doc.data().amountOfPeople);
    });

    return (
        <font size='10' className='amountPpl'>{peopleInThePlaceNow}</font>
    );
};

export default CapacityCounter;