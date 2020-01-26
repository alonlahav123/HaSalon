import React, { useState } from "react";
import ForgotForm from "../components/forgot";
import NavBar from '../components/navBar.js'

function ResetPassword() {
  return (
    <div>
      <NavBar/>
      <ForgotForm/>
    </div>
  );
}


export default ResetPassword;
