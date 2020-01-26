import React, { useState } from 'react';

import CouchPointsWallet from "../components/couchPointsWallet";
import NavBar from '../components/navBar.js'

function Wallet() {
    return (
        <div>
            <NavBar/>
            <CouchPointsWallet />
        </div>
    )
}

export default Wallet;