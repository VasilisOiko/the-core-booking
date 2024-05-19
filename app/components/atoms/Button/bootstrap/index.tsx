import React from "react";
import {Button as BootstrapButton} from "react-bootstrap";



function Button(props?:any) {
  return (
    <BootstrapButton {...props}/>
  )
}

export default Button