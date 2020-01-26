import React from "react";

function WidthFinder(){
    let screenWidth=window.screen.width;
    let elementWidth=Math.floor((screenWidth/3))+'px';
    return(elementWidth);
   }
export default WidthFinder;