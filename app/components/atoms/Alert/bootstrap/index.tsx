import React from "react";
import {Alert as BootstrapAlert} from "react-bootstrap";



function Alert(props?:any) {
  return (
    <BootstrapAlert {...props}/>
  )
}

export default Alert