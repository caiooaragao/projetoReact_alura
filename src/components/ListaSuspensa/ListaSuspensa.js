import React from "react";
import "./ListaSuspensa.css"

const ListaSuspensa = (props) => {
    
    
    return(
        
        <div className="opcoes-container">
            <label className="opcao">{props.label}</label>
            <select onChange={e => props.aoAlterado(e.target.value)} className="select" value={props.value}>
                <option> </option>
                {props.lista.map(item => (<option className="option" key={item} >{item}</option>))}
            </select>
        </div>
    )
}

export default ListaSuspensa