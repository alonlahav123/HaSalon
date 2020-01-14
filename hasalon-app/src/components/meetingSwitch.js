import React, { useState } from 'react';
import './meetingSwitch.css';
import DB from '../firestore';

function MeetingSwitch(props) {

    // DB.collection('simpleData').doc('persons').onSnapshot((doc) => {
    //     setChecked(doc.data().isMeeting);
    //     console.log('checked: ' + checked);
    // });
    const [checked, setChecked] = useState(false);

    
    DB.collection('simpleData').doc('persons').get().then(function (doc) {
        console.log('prechecked: ' + doc.data().isMeeting);
        document.getElementById('switch').checked = doc.data().isMeeting;
    })


    return (
        <label className="switch">
            <input type="checkbox" id='switch' onClick={() => { test() }} />
            <span className="slider round"></span>
        </label>
    )
}

function test() {
    let checked = document.getElementById('switch').checked;

    if (checked) {
        updateMeeting(true);
        console.log('true');
    } else {
        updateMeeting(false);
        console.log('false');
    }
}

function updateMeeting(update) {
    DB.collection('simpleData').doc('persons').update({
        isMeeting: update
    })
}



export default MeetingSwitch;