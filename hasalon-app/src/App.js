import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";

import CapacityCounter from "./components/capacityCounter";
import CapacityButton from './components/capacityButton';
import ChairOccupancy from './components/chairCapacityBox';

export default function App() {


//   let Chairs= [
//     {chair:"chair0", occupiedSeat: occupiedSeat},
//     {chair:"chair1", occupiedSeat: occupiedSeat},
//     {chair:"chair2", occupiedSeat: occupiedSeat},
//     {chair:"chair3", occupiedSeat: occupiedSeat},
//     {chair:"chair4", occupiedSeat: occupiedSeat},
//     {chair:"chair5", occupiedSeat: occupiedSeat},
//     {chair:"chair6", occupiedSeat: occupiedSeat},
//     {chair:"chair7", occupiedSeat: occupiedSeat},
//     {chair:"chair8", occupiedSeat: occupiedSeat},
//     {chair:"chair9", occupiedSeat: occupiedSeat},
//     {chair:"chair10", occupiedSeat: occupiedSeat},
//     {chair:"chair11", occupiedSeat: occupiedSeat},
//     {chair:"chair12", occupiedSeat: occupiedSeat},
//     {chair:"chair13", occupiedSeat: occupiedSeat},
//     {chair:"chair14", occupiedSeat: occupiedSeat},
//     {chair:"chair15", occupiedSeat: occupiedSeat},
//     {chair:"chair16", occupiedSeat: occupiedSeat},
//     {chair:"chair17", occupiedSeat: occupiedSeat},
//     {chair:"chair18", occupiedSeat: occupiedSeat},
//     {chair:"chair19", occupiedSeat: occupiedSeat},
//     {chair:"chair20", occupiedSeat: occupiedSeat},
//     {chair:"chair21", occupiedSeat: occupiedSeat},
//     {chair:"chair22", occupiedSeat: occupiedSeat}
// ];

  return (
    <div>
      <CapacityButton multiplier={-1} sign={'-'}/>
      <CapacityButton multiplier={1} sign={'+'}/>
      <CapacityCounter />
      <ChairOccupancy />
      <div>
      </div>
    </div>
  );
}