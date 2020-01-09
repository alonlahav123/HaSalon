import React, { useState } from "react";
import "./capacityCounter.css";
import "firebase/firestore";
import DB from "../firestore";

// function ChairOccupied(props) {
//    return <div className='occupied seat'></div>
// }
// function ChairEmpty(props) {
//     return <div className='open seat'></div>
// }
function ChairColoration(props) {
    const ChairIsTaken=props.chair.taken;
    console.log(ChairIsTaken)
    if (ChairIsTaken) {
       return( <div className='open seat'>k</div>)
    } else {
        return(<div className='occupied seat'>L</div>)
    }
}

export default ChairColoration;
// export default ChairOccupied;
// export default ChairEmpty;