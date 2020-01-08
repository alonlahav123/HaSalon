import React, { useState } from 'react';

import CapacityCounter from "../components/capacityCounter";

function tracker() {
    return (
        <div>
            <h2>Tracker</h2>
            <CapacityCounter />
        </div>
    )
}

export default tracker;