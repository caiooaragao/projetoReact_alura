import React from "react";
import "./ButtonSubmit.css"


function ButtonSubmit(props){
    return(
        <button >{props.children}</button>
    )
}


export default ButtonSubmit