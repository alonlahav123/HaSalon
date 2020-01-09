import React, { useState } from 'react';
import './frontDesk.css'

import CapacityCounter from "../components/capacityCounter";
import CapacityButton from '../components/capacityButton';
import FrontDeskCalendar from '../components/frontDeskCalendar'

function frontDesk() {
    return (
        <div>
            <h2>Front Desk</h2>
            <div className='container'>
                <div className='capacityContainer'>
                    <CapacityButton multiplier={-1} sign={'-'} />
                    <CapacityCounter />
                    <CapacityButton multiplier={1} sign={'+'} />
                </div>
                <FrontDeskCalendar className='calendar' />
            </div>
        </div>
    )
}

export default frontDesk;