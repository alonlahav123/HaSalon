import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";

import CapacityCounter from "./components/capacityCounter";
import CapacityButton from './components/capacityButton';
import ChairOccupancy from './components/chairCapacityBox';
import chairs from './components/chairCapacityBox'

export default function App() {
  // const [seatingchart,setSeatingChart]= useState(chairs)
  
  return (
    <div>
      <CapacityButton multiplier={-1} sign={'-'}/>
      <CapacityButton multiplier={1} sign={'+'}/>
      <CapacityCounter />
      <ChairOccupancy 
      // startingOccupancy=
        // {
          // Promise.resolve().
          // DB.collection('simpleData').doc('persons').get().then((doc)=>{
            // return doc.data().amountOfPeople 
          // })
        // }
      />
      
      <div className='seatingChart'>
        {/* {
           seatingchart.map((chair, taken,index)=>{
            return(<ChairOccupancy key={index} occupied={taken} chair={chair} /> )
          })    
        } */}
      </div>
    </div>
  );
}