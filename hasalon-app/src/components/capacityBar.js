import React, { useState } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./capacityBar.css";
import DB from "../firestore";
import couchLogo from './HaSalonLogo.png';

function CapacityCounter(props) {
  const [isLoading, setIsLoading] = useState(true);
  const [percentFull, setPercentFull] = useState(0);

  DB.collection("simpleData")
    .doc("persons")
    .onSnapshot(doc => {
      let data = doc.data();
      setPercentFull(data.amountOfPeople / data.capacity);
      setIsLoading(false);
    });
  const couches = output(percentFull);

  return (
    <div className="couchBar">
      {isLoading ? <Spinner animation="border" /> : <div>{couches}</div>}
      <div className='titleToBar'>Real-time capacity of HaSalon</div>
    </div>
  );
}

function output(percentFull) {
  let maxCouches = 5;
  let output = [];
  const numberOfCouches = getNumberOfCouches(percentFull);

  for (let i = 0; i < maxCouches; i++) {
    if (i < numberOfCouches) {
      output.push(<CouchIcon key={`couch_${i}`} />);
    } else {
      output.push(<GreyedOutCouchIcon key={`couch_${i}`} />);
    }
  }

  return output;
}

function getNumberOfCouches(percentFull) {
  if (percentFull > 0.95) {
    //change to 0.1
    return 5;
  }
  if (percentFull > 0.7) {
    return 4;
  }
  if (percentFull > 0.5) {
    return 3;
  }
  if (percentFull > 0.3) {
    return 2;
  }
  if (percentFull > 0.1) {
    // kept it high so it will almost never be truely "full"
    return 1;
  }
  return 0;
}

function CouchIcon(props) {
  return (
    <img
      className="couchIcon"
      src={couchLogo}
    />
  );
}

function GreyedOutCouchIcon(props) {
  return (
    <img
      className="greyedOut couchIcon"
      src={couchLogo}
    />
  );
}

export default CapacityCounter;
