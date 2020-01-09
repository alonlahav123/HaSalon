import React, { useState } from "react";
import "./capacityCounter.css";
import "firebase/firestore";
import DB from "../firestore";
import ChairOccupied from "./ChairOccupiedThing";
import ChairEmpty from "./ChairEmptyThing";
// import ChairColoration from "./chairCapacityBoxColoration.js"

function SelectRandomSeatZ(peopleInThePlaceNow) {
    let chairPercentRandom;
    let chairRandom;
    chairPercentRandom = Math.random();
    if(chairPercentRandom<(peopleInThePlaceNow/22)){
        chairRandom=true;
    }else{
        chairRandom=false;
    }
    return chairRandom;
}
function Work(newChairs) {
    newChairs.map((chair, taken, index)=>{
        console.log('africa')
        // return (<ChairColoration chair={chair} taken={taken} title='some title' key={index}/>)
    })
}

function Tester(props) {
    // const [peopleInThePlaceNow, setPeopleInThePlaceNow] = useState(0);
    let Chairs=[
        // {chair: 'chair0', taken:''}
    ];
    const [newChairs,setChairs]=useState(Chairs);
    DB.collection("simpleData").doc("persons").onSnapshot(doc => {
                    let peopleInThePlaceNow=doc.data().amountOfPeople;
            // setPeopleInThePlaceNow(doc.data().amountOfPeople);
            let peopleInThePlaceNowCounter=0;
            console.log(peopleInThePlaceNow);
            for (let index = 0; index < 22; index++) {
                if(peopleInThePlaceNow>peopleInThePlaceNowCounter){
                    if(SelectRandomSeatZ(peopleInThePlaceNow)){
                    Chairs[index]={chair: 'chair'+index, taken: true};
                    peopleInThePlaceNowCounter++
                    }else{
                    Chairs[index]={chair: 'chair'+index, taken: false};
                    }
                }else if((peopleInThePlaceNow-peopleInThePlaceNowCounter)===(22-index)){
                    Chairs[index]={chair: 'chair'+index, taken: true};
                    peopleInThePlaceNowCounter++
                }else{
                    Chairs[index]={chair: 'chair'+index, taken: false};
                }
            }                               
            // console.log(Chairs)
            setChairs(Chairs)
            console.log(newChairs)
    });
    return(
        <div className='container' onClick={()=>{
            newChairs.map((chair, taken, index)=>{
                if (chair.taken) {
                    // return(<ChairOccupied />)
                    // return(<div className='occupied seat'>oj</div>)
                    return(<h1>Taken</h1>)
                } else {
                    // return(<ChairEmpty/>)
                    // return(<div className='open seat'>hi</div>)
                    return(<h1>Open</h1>)   
                }
                // return (<ChairColoration chair={chair} taken={taken} title='some title' key={index}/>)
            })}
        }>Click Here
        </div>
    );
}

export default Tester;
