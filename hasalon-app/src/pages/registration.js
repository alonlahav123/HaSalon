import React, { useState } from "react";
import SignupForm from "../components/register";

function Registration() {
  const [isAlertShown, setIsAlertShown] = useState (false);
  return (
    <div>
      <SignupForm/>
    </div>
  );
}


export default Registration;
