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
function CreateNewChairArray(Chairs, peopleInThePlaceNow) {
    let peopleInThePlaceNowCounter=0;
    for (let index = 0; index < 22; index++) {
        if(peopleInThePlaceNow>peopleInThePlaceNowCounter){
            if(SelectRandomSeatZ(peopleInThePlaceNow)){
            Chairs[index]={chair: 'chair'+index, taken: true};
            peopleInThePlaceNowCounter++
            }else{
            Chairs[index]={chair: 'chair'+index, taken: false};
            }
        }else if((peopleInThePlaceNow-peopleInThePlaceNowCounter)===(22-index)){
            console.log('spls');
            Chairs[index]={chair: 'chair'+index, taken: true};
            peopleInThePlaceNowCounter++
        }else{
            Chairs[index]={chair: 'chair'+index, taken: false};
        }
    }                               
}

function CheckNewChairsArray(Chairs, peopleInThePlaceNow) {
    // const [newChairs,setChairs]=useState(Chairs);
    let CheckCounter=0;
    let CheckFalse=0;
    Chairs.forEach(chair => {
        if (chair.taken) {
            CheckCounter++;
        } else {
            CheckFalse++;
        }
    });
    console.log(CheckCounter+ 'check counter');
    if (CheckCounter<peopleInThePlaceNow) {
        for (let index = CheckCounter; index <peopleInThePlaceNow; index++) {
            let subtractor=22-(peopleInThePlaceNow-CheckCounter);
            console.log(subtractor+ 'subtractor')
            // Chairs[subtractor]={chair: 'chair'+subtractor, taken: true}
            if (Chairs[subtractor].taken===false) {
                Chairs[subtractor]={chair: 'chair'+subtractor, taken: true}
            } else if(Chairs[subtractor-1].taken===false) {
                Chairs[subtractor]={chair: 'chair'+subtractor, taken: true}
            } else if (Chairs[subtractor-2].taken===false) {
                Chairs[subtractor-2]={chair: 'chair'+subtractor, taken: true}
            } else if (Chairs[subtractor-3].taken===false) {
                Chairs[subtractor-3]={chair: 'chair'+subtractor, taken: true}
            } else if(Chairs[subtractor-4].taken===false){
                Chairs[subtractor-4]={chair: 'chair'+subtractor, taken: true}
            }  else if (Chairs[subtractor-5].taken===false) {
                Chairs[subtractor-5]={chair: 'chair'+subtractor, taken: true}
            } else if (Chairs[subtractor-6].taken===false) {
                Chairs[subtractor-6]={chair: 'chair'+subtractor, taken: true}
            } else if(Chairs[subtractor-7].taken===false){
                Chairs[subtractor-7]={chair: 'chair'+subtractor, taken: true}
            } else{
                console.log('What are the odds?')
            }
        }
    } else {
        if (CheckCounter>peopleInThePlaceNow) {
            for (let index = CheckCounter; index >peopleInThePlaceNow; index--) {
                let subtractor=21-(peopleInThePlaceNow-CheckCounter);
                console.log(subtractor+ 'subtractor')
                // Chairs[subtractor]={chair: 'chair'+subtractor, taken: true}
                if (Chairs[subtractor].taken===true) {
                    Chairs[subtractor]={chair: 'chair'+subtractor, taken: false}
                } else if(Chairs[subtractor-1].taken===true) {
                    Chairs[subtractor]={chair: 'chair'+subtractor, taken: false}
                } else if (Chairs[subtractor-2].taken===true) {
                    Chairs[subtractor-2]={chair: 'chair'+subtractor, taken: false}
                } else if (Chairs[subtractor-3].taken===true) {
                    Chairs[subtractor-3]={chair: 'chair'+subtractor, taken: false}
                } else if(Chairs[subtractor-4].taken===true){
                    Chairs[subtractor-4]={chair: 'chair'+subtractor, taken: false}
                }  else if (Chairs[subtractor-5].taken===true) {
                    Chairs[subtractor-5]={chair: 'chair'+subtractor, taken: false}
                } else if (Chairs[subtractor-6].taken===true) {
                    Chairs[subtractor-6]={chair: 'chair'+subtractor, taken: false}
                } else if(Chairs[subtractor-7].taken===true){
                    Chairs[subtractor-7]={chair: 'chair'+subtractor, taken: false}
                }
        console.log('uhh oh')
            }
        }
    }
    // setChairs(Chairs)
    return(Chairs);
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
                }else if((peopleInThePlaceNow-peopleInThePlaceNowCounter)===(21-index)){
                    console.log('spls');
                    Chairs[index]={chair: 'chair'+index, taken: true};
                    peopleInThePlaceNowCounter++
                    // Chairs[21]={chair: 'chair21', taken: false};                               
                }else{
                    Chairs[index]={chair: 'chair'+index, taken: false};
                }
            }
            CheckNewChairsArray(Chairs, peopleInThePlaceNow)
            // console.log(Chairs)
            setChairs(CheckNewChairsArray(Chairs, peopleInThePlaceNow))
            // setChairs(Chairs)
            console.log(newChairs)
    });
    return(
        // <div className='container' onClick={()=>{
        //     newChairs.map((chair, taken, index)=>{
        //         if (chair.taken) {
        //             // return(<ChairOccupied />)
        //             // return(<div className='occupied seat'>oj</div>)
        //             return(<h1>Taken</h1>)
        //         } else {
        //             // return(<ChairEmpty/>)
        //             // return(<div className='open seat'>hi</div>)
        //             return(<h1>Open</h1>)   
        //         }
        //         // return (<ChairColoration chair={chair} taken={taken} title='some title' key={index}/>)
        //     })}
        // }>Click Here
        // </div>
        
        <div className='container'>
            <button onClick={()=>{
            newChairs.map((chair, taken, index)=>{
                if (chair.taken) {
                    console.log('does it work?')
                    const ElementOccupied=<h1>Taken</h1>;
                    // return(<ChairOccupied />)
                    // return(<div className='occupied seat'>oj</div>)
                    // app.render(ElementOccupied, document.getElementById('occupied'))
                    return(ElementOccupied)
                } else {
                    // return(<ChairEmpty/>)
                    // return(<div className='open seat'>hi</div>)
                    return(<h1>Open</h1>)   
                }
                // return (<ChairColoration chair={chair} taken={taken} title='some title' key={index}/>)
            })}
        }>Click Here</button>
        </div>
    );
}

export default Tester;
