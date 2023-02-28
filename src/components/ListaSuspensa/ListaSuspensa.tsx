import React from "react";
import "./ListaSuspensa.css"

interface ListaSuspensaProps{
    aoAlterado: (valor: string) => void,
    label: string,
    itens: string[],
    value: string
    
}

const ListaSuspensa = (props :ListaSuspensaProps) => {
    
    
    return(
        
        <div className="opcoes-container">
            <label className="opcao">{props.label}</label>
            <select onChange={e => 
                props.aoAlterado(e.target.value)} className="select" 
                value={props.value}>
                {props.itens.map(item =>
             (<option className="option" key={item} >{item}</option>))}
            </select>
        </div>
    )
}

export default ListaSuspensa