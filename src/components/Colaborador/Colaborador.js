import React from "react";
import "./Colaborador.css"


const Colaborador = (props) => {
    return (
        <div className="colaborador">
            <div className="cabecalho">
                <img src="https://github.com/viniciosneves.png "alt='erro' />
            </div>
            <div className="rodape">
                <h4>{props.nome}</h4>
                <h5>{props.cargo}</h5>
            </div>

        </div>
        
      
    )
}

export default Colaborador