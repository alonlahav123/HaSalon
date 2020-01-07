import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/firestore';
import DB from "./firestore.js";

import CapacityCounter from "./components/capacityCounter";

export default function App() {

  return (
    <div className='capacityCounter'>
      <CapacityCounter />

    </div>
  );
}