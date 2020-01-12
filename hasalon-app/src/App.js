import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";

import CapacityCounter from "./components/capacityCounter";
import CapacityButton from './components/capacityButton';
// import ChairOccupancy from './components/chairCapacityBox';
import chairs from './components/chairCapacityBox'
import Tester from './components/chairCapacityBox';
import newChairs from './components/chairCapacityBox'

export default function App() {
  // const [seatingchart,setSeatingChart]= useState(chairs)
  
  return (
    <div>
      <CapacityButton multiplier={-1} sign={'-'}/>
      <CapacityButton multiplier={1} sign={'+'}/>
      <CapacityCounter />
      {/* {
        newChairs.map((chair, taken, index)=>{
          if (chair.taken) {
              // return(<ChairOccupied />)
              // return(<div className='occupied seat'>oj</div>)
              return(<h1>Taken</h1>)
          } else {
              // return(<ChairEmpty/>)
              // return(<div className='open seat'>hi</div>)
              return(<h1>Open</h1>)   
          }
          // return (<ChairColoration chair={chair} taken={taken} title='some title' key={index}/>)
      })} */}
      
      <Tester/>
    </div>
  );
}