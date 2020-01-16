import React, { useCallback, useState } from "react";
import "firebase/firestore";
import DB from "../firestore";
import { InputGroup, FormControl, Container, Col, Row } from "react-bootstrap";
import "./meetingSwitch.css";

DB.collection("simpleData")
  .doc("persons")
  .get()
  .then(function(doc) {
    document.getElementById("switch").checked = doc.data().isMeeting;
    document.getElementById(
      "meetingCapacityInput"
    ).disabled = doc.data().isMeeting;
    document.getElementById(
      "meetingCapacityInput"
    ).defaultValue = doc.data().meetingCapacity;
  });

function MeetingCapacityInput(props) {
  const [inputMeetingCapacity, setInputMeetingCapacity] = useState(0);
  const [checked, setChecked] = useState(false);
  const [, forceUpdate] = React.useState(0);

  const handleChange = useCallback(event => {
    const parsed = parseFloat(event.target.value, 10);
    const nextValue = isNaN(parsed) ? "" : parsed;
    setInputMeetingCapacity(nextValue);
  }, []);

  if (props.resetMeetingInputs) {
    resetInputs();
    props.setResetMeetingInputs(false);
  }

  function resetInputs() {
    document.getElementById("switch").checked = false;
  }

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <InputGroup className="mb-3">
            <FormControl
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
              onChange={handleChange}
              id="meetingCapacityInput"
              type="text"
              pattern="[0-9]*"
              value={inputMeetingCapacity}
            />
            <InputGroup.Append>
              <InputGroup.Text id="inputGroup-sizing-default">
                people in the meeting
              </InputGroup.Text>
            </InputGroup.Append>
          </InputGroup>
        </Col>
      </Row>

      <Row>
        <Col className="text-center">
          <label className="switch">
            <input
              type="checkbox"
              id="switch"
              onClick={() => {
                test();
                forceUpdate(n => !n);
              }}
            />
            <span className="slider round"></span>
          </label>
        </Col>
      </Row>
    </Container>
  );
}

function test() {
  let checked = document.getElementById("switch").checked;
  let rawCapacity = document.getElementById("meetingCapacityInput").value;
  const cleanCapacity = Number(rawCapacity);

  if (checked) {
    DB.collection("simpleData")
      .doc("persons")
      .get()
      .then(function(doc) {
        const amntPpl = doc.data().amountOfPeople;
        const metaCap = doc.data().capacity;
        const meetingRoomTotal = doc.data().meetingRoomTotal;
        const rawNewMetaCap = metaCap - meetingRoomTotal;
        const rawNewAmntPpl = amntPpl - cleanCapacity;
        const newAmntPpl = Number(rawNewAmntPpl);
        const newMetaCap = Number(rawNewMetaCap);
        DB.collection("simpleData")
          .doc("persons")
          .update({
            amountOfPeople: newAmntPpl,
            capacity: newMetaCap
          });
      });
    updateMeeting(true, rawCapacity);
    console.log("true");
    console.log(cleanCapacity);
  } else {
    DB.collection("simpleData")
      .doc("persons")
      .get()
      .then(function(doc) {
        const amntPpl = doc.data().amountOfPeople;
        const oldMtgCap = doc.data().meetingCapacity;
        const metaCap = doc.data().capacity;
        const meetingRoomTotal = doc.data().meetingRoomTotal;
        const rawNewMetaCap = metaCap + meetingRoomTotal;
        const rawNewAmntPpl = amntPpl + oldMtgCap;
        const newMetaCap = Number(rawNewMetaCap);
        const newAmntPpl = Number(rawNewAmntPpl);
        DB.collection("simpleData")
          .doc("persons")
          .update({
            amountOfPeople: newAmntPpl,
            capacity: newMetaCap
          });
      });
    updateMeeting(false, 0);
    console.log("false");
    console.log(cleanCapacity);
  }
}

function updateMeeting(boolUpdate, meetingCapUpdate) {
  const b = Number(meetingCapUpdate);
  DB.collection("simpleData")
    .doc("persons")
    .update({
      isMeeting: boolUpdate,
      meetingCapacity: b
    });
}

export default MeetingCapacityInput;
