import React, { useState } from "react";
import "./capacityCounter.css";
import "firebase/firestore";
import DB from "../firestore";

function ChairColoration(props) {
    const [color, setColor]=useState('white');
    return(<div className='chair' style={{ background:color}} onInput={()=>{
        if (props.chair.taken) {
            setColor('orange');
        } else {
            setColor('green');
        }
    }}></div>)
}

export default ChairColoration;