import React from "react";
import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    
    
    return(
        
        <div className="opcoes-container">
            <label className="opcao">{props.label}</label>
            <select className="select">
                {props.lista.map(item => (<option className="option" key={item} >{item}</option>))}
            </select>
        </div>
    )
}

export default ListaSuspensa