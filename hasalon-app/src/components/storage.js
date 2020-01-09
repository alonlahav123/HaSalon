

function SelectRandomSeat() {
    let chairX;
    chairX = Math.floor(Math.random() * (21 - 0) + 0);
    return chairX;
  }
  
  // function ChairOccupancy(props) {
  //   const [peopleInThePlaceNow, setPeopleInThePlaceNow] = useState(0);
    // let stateSetter=0;
    // console.log(startingOccupancy);
    // console.log('s')
    //   const [peopleInThePlaceNow, setPeopleInThePlaceNow] = useState(startingOccupancy);
  
    //   Idan's until next comment
    //   let initialChairs = [
    //     { chair: "chair0", taken: false },
    //     { chair: "chair1", taken: false },
    //     { chair: "chair2", taken: false },
    //     { chair: "chair3", taken: false },
    //     { chair: "chair4", taken: false },
    //     { chair: "chair5", taken: false },
    //     { chair: "chair6", taken: false },
    //     { chair: "chair7", taken: false },
    //     { chair: "chair8", taken: false },
    //     { chair: "chair9", taken: false },
    //     { chair: "chair10", taken: false },
    //     { chair: "chair11", taken: false },
    //     { chair: "chair12", taken: false },
    //     { chair: "chair13", taken: false },
    //     { chair: "chair14", taken: false },
    //     { chair: "chair15", taken: false },
    //     { chair: "chair16", taken: false },
    //     { chair: "chair17", taken: false },
    //     { chair: "chair18", taken: false },
    //     { chair: "chair19", taken: false },
    //     { chair: "chair20", taken: false },
    //     { chair: "chair21", taken: false }
    //   ];
    //   const [chairs, setChairs] = useState(initialChairs);
    //   const setOccupiedSeat = (seatNumber) => {
    //       const newChairs = [...chairs]
    //       newChairs[seatNumber] = {...newChairs[seatNumber], taken: true}
    //       setChairs(newChairs)
    //   }
  
    //   everytime setOccupiedSeat is called the page will function will be called again with the new state
    // so all occupiedSeats will be turned to true b/c they all reference the same reloader changed variable
    // const [occupiedSeat, setOccupiedSeat]= useState(false);
    // let Chairs=[
    //     { chair: "chair0", taken: occupiedSeat },
    //     { chair: "chair1", taken: occupiedSeat },
    //     { chair: "chair2", taken: occupiedSeat },
    //     { chair: "chair3", taken: occupiedSeat },
    //     { chair: "chair4", taken: occupiedSeat },
    //     { chair: "chair5", taken: occupiedSeat },
    //     { chair: "chair6", taken: occupiedSeat },
    //     { chair: "chair7", taken: occupiedSeat },
    //     { chair: "chair8", taken: occupiedSeat },
    //     { chair: "chair9", taken: occupiedSeat },
    //     { chair: "chair10", taken: occupiedSeat },
    //     { chair: "chair11", taken: occupiedSeat },
    //     { chair: "chair12", taken: occupiedSeat },
    //     { chair: "chair13", taken: occupiedSeat },
    //     { chair: "chair14", taken: occupiedSeat },
    //     { chair: "chair15", taken: occupiedSeat },
    //     { chair: "chair16", taken: occupiedSeat },
    //     { chair: "chair17", taken: occupiedSeat },
    //     { chair: "chair18", taken: occupiedSeat },
    //     { chair: "chair19", taken: occupiedSeat },
    //     { chair: "chair20", taken: occupiedSeat },
    //     { chair: "chair21", taken: occupiedSeat }
    // ]
  //   let Chairs = [
  //     { chair: "chair0", taken: false },
  //     { chair: "chair1", taken: false },
  //     { chair: "chair2", taken: false },
  //     { chair: "chair3", taken: false },
  //     { chair: "chair4", taken: false },
  //     { chair: "chair5", taken: false },
  //     { chair: "chair6", taken: false },
  //     { chair: "chair7", taken: false },
  //     { chair: "chair8", taken: false },
  //     { chair: "chair9", taken: false },
  //     { chair: "chair10", taken: false },
  //     { chair: "chair11", taken: false },
  //     { chair: "chair12", taken: false },
  //     { chair: "chair13", taken: false },
  //     { chair: "chair14", taken: false },
  //     { chair: "chair15", taken: false },
  //     { chair: "chair16", taken: false },
  //     { chair: "chair17", taken: false },
  //     { chair: "chair18", taken: false },
  //     { chair: "chair19", taken: false },
  //     { chair: "chair20", taken: false },
  //     { chair: "chair21", taken: false }
  //   ];
  //     let Chairs=[
  //         {chair: 'chair0', taken:''}
  //     ]; 
  //   // console.log(chairs);
  //   //   console.log(Chairs);
  //   DB.collection("simpleData")
  //     .doc("persons")
  //     .onSnapshot(doc => {
  //       setPeopleInThePlaceNow(doc.data().amountOfPeople);
  //       //   console.log(peopleInThePlaceNow);
  //       for (let index = 0; index < peopleInThePlaceNow; index++) {
  //         // const randomSeat = SelectRandomSeat()
  //         // console.log(chairs[randomSeat].occupiedSeat);
  //         let occupiedChairId = SelectRandomSeat();
  //         // chairs[randomSeat].occupiedSeat
  //         Chairs[occupiedChairId].taken
  //           ? index--
  //           : (Chairs[occupiedChairId].taken = true);
  //         // : setOccupiedSeat(randomSeat);
  //         // : setOccupiedSeat(true);
  //       }
  //       console.log(Chairs);
  //       // console.log(chairs);
  //     });
  
  //   return (
  //     // <div
  //     //   className="container"
  
  //       //   chairs.forEach(chair =>
  //       // chair.occupiedSeat ? (
  //       //     <div className="occupied seat"></div>
  //       //   ) : (
  //       //     <div className="open seat"></div>
  //       //   )
  
  //       // Chairs.forEach(chair=>
  //       //     chair.occupiedSeat ? (
  //       //     <div className="occupied seat">hb</div>
  //       //   ) : (
  //       //     <div className="open seat">bj</div>
  //       //   )
  //       // )
  // // >
  //     //   {/* {Chairs.forEach(chair=>
  //     //     chair.occupiedSeat ? (
  //     //     <div className="occupied seat">hb</div>
  //     //   ) : (
  //     //     <div className="open seat">bj</div>
  //     //   )
  //     // )}jsldjfl</div> */}
  //     //   {/* // // If I want to have a return:
  //     //     // Chairs.forEach(chair =>{ */}
  //     //   {/* //  return   chair.occupiedSeat ? (<div className="occupied seat"></div>) : (<div className="open seat"></div>)
  //     //     // })
  //     //     // If I want to have a return: */}
  //       Chairs.forEach(chair => {
  //         if (chair.occupiedSeat) {
  //           console.log("occupied");
  //           return (<div className="occupied seat">d</div>);
  //         } else {
  //           console.log("empty");
  //           return (<div className="open seat">op</div>);
  //         }
  //       })
        
  //     // {/* </div> */}
  //   );
  // }
  
  // export default ChairOccupancy;
  