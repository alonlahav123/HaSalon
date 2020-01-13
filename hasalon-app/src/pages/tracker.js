import React, { useState } from 'react';

import CapacityCounter from "../components/capacityCounter";
import CapacityBar from '../components/capacityBar';

function tracker() {
    return (
        <div>
            <h2>Tracker</h2>
            <CapacityCounter />
            <CapacityBar />
        </div>
    )
}

export default tracker;