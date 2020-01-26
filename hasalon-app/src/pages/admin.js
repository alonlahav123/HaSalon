import React from 'react';

import CouchPointsAdmin from "../components/couchPointsManipulation";
import NavBar from '../components/navBar.js'

function Admin() {
    return (
        <div>
            <NavBar/>
            <CouchPointsAdmin />
        </div>
    )
}

export default Admin;