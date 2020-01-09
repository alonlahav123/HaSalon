import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";

import CapacityCounter from "./components/capacityCounter";
import CapacityButton from './components/capacityButton';
// import ChairOccupancy from './components/chairCapacityBox';
import chairs from './components/chairCapacityBox'
import Tester from './components/chairCapacityBox';

export default function App() {
  // const [seatingchart,setSeatingChart]= useState(chairs)
  
  return (
    <div>
      <CapacityButton multiplier={-1} sign={'-'}/>
      <CapacityButton multiplier={1} sign={'+'}/>
      <CapacityCounter />
      <Tester />
    </div>
  );
}