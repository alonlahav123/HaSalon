import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";

import CapacityCounter from "./components/capacityCounter";
import CapacityButton from './components/capacityButton';

export default function App() {

  return (
    <div>
      <CapacityButton multiplier={-1} sign={'-'}/>
      <CapacityButton multiplier={1} sign={'+'}/>
      <CapacityCounter />
    </div>
  );
}