import React from "react";
import Input from "./Input/Input";
import "./Form.css"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
function Form(){
const minhaLista = [
    "senior", "junior", "pleno", "estagiário"
]

    return(  
        <form className="form-container">
            <h2>Preencha os dados para cirar os cards do colaborador</h2>
            <Input nome="nome" placeholder="digite o seu nome" type="text"/>
            <Input nome="cargo" placeholder="digite o seu cargo" type="text"/>
            <Input nome="imagem" placeholder="insira uma image" type="text"/>
            <ListaSuspensa lista={minhaLista} label="selecione uma opçao"/>
            

        </form>
    )
}

export default Form