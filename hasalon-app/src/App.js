import React, { useState } from "react";
import DB from "./firestore";
import CapacityButton from './components/capacityButton';

export default function App() {

  return (
    <div>
      <CapacityButton multiplier={-1} sign={'-'}/>
      <CapacityButton multiplier={1} sign={'+'}/>
      <div>Herro</div>
    </div>
  );
}