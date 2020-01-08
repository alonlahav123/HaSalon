import React, { useState } from 'react';
import './capacityCounter.css';
import 'firebase/firestore';
import DB from "../firestore";

function SelectRandomSeat(props) {
    let chairX;
    chairX=Math.floor(Math.random()*(21-0)+0);
    return(chairX)
}

function ChairOccupancy(props) {
    const [peopleInThePlaceNow, setPeopleInThePlaceNow] = useState(0);
    const [populationChange, setPopulationChange]= useState(false);
    const [occupiedSeat, setOccupiedSeat]= useState(false);
    let Chairs= [
        {chair:"chair0", occupiedSeat: occupiedSeat},
        {chair:"chair1", occupiedSeat: occupiedSeat},
        {chair:"chair2", occupiedSeat: occupiedSeat},
        {chair:"chair3", occupiedSeat: occupiedSeat},
        {chair:"chair4", occupiedSeat: occupiedSeat},
        {chair:"chair5", occupiedSeat: occupiedSeat},
        {chair:"chair6", occupiedSeat: occupiedSeat},
        {chair:"chair7", occupiedSeat: occupiedSeat},
        {chair:"chair8", occupiedSeat: occupiedSeat},
        {chair:"chair9", occupiedSeat: occupiedSeat},
        {chair:"chair10", occupiedSeat: occupiedSeat},
        {chair:"chair11", occupiedSeat: occupiedSeat},
        {chair:"chair12", occupiedSeat: occupiedSeat},
        {chair:"chair13", occupiedSeat: occupiedSeat},
        {chair:"chair14", occupiedSeat: occupiedSeat},
        {chair:"chair15", occupiedSeat: occupiedSeat},
        {chair:"chair16", occupiedSeat: occupiedSeat},
        {chair:"chair17", occupiedSeat: occupiedSeat},
        {chair:"chair18", occupiedSeat: occupiedSeat},
        {chair:"chair19", occupiedSeat: occupiedSeat},
        {chair:"chair20", occupiedSeat: occupiedSeat},
        {chair:"chair21", occupiedSeat: occupiedSeat},
        {chair:"chair22", occupiedSeat: occupiedSeat}
    ];
    DB.collection('simpleData').doc('persons').onSnapshot((doc) => {
        setPopulationChange(true);
        setPeopleInThePlaceNow(doc.data().amountOfPeople);
        console.log(peopleInThePlaceNow);
        for (let index = 0; index < peopleInThePlaceNow; index++) {
            console.log(Chairs[SelectRandomSeat()].occupiedSeat);
            Chairs[SelectRandomSeat()].occupiedSeat? (index--):(setOccupiedSeat(true));
        }
        console.log(Chairs);
    });

    return(
        <div className='container'>
            Chairs.forEach(chair => {
                occupiedSeat? (<div className='occupied seat'></div>):(<div className='open seat'></div>)
            });
            
        </div> 
    )    
}

export default ChairOccupancy;