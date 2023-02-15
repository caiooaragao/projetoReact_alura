import React from "react";
import "./Input.css"
function Input({nome, type, placeholder}){
    return(
        <div className="input-container">
            <label htmlFor={nome}>{nome}</label>
            <input type={type} placeholder={placeholder} name={nome}   />
        </div>
    )
}

export default Input