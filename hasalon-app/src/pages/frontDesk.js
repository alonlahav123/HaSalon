import React, { useState } from 'react';
import './frontDesk.css'

import CapacityCounter from "../components/capacityCounter";
import CapacityButton from '../components/capacityButton';

function frontDesk() {
    return (
        <div>
            <h2>Front Desk</h2>
            <div>
                <CapacityButton multiplier={-1} sign={'-'} />
                <CapacityCounter />
                <CapacityButton multiplier={1} sign={'+'} />
            </div>
        </div>
    )
}

export default frontDesk;