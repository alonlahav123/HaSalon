import React, {useState} from "react";
import DB from "./firestore";

export default function App() {
  let [counter, setCounter] = useState(0);

  DB.collection('simpleData').doc('persons').onSnapshot((doc) => {
    console.log(doc.data().amountOfPeople);
    setCounter( doc.data().amountOfPeople );
  });

  return (
    <div>
      {counter}
    </div>
  );
}