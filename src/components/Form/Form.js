import React, { useState } from "react";
import Input from "./Input/Input";
import "./Form.css"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";



function Form(props){
const minhaLista = [
    "senior", "junior", "pleno", "estagiário",
]

const enviarDados = (e) =>{ 
    e.preventDefault()
    props.aoColaboradorCadastrado({
        nome,
        cargo,
        imagem,
        time
    })

}

const [nome, setNome] = useState('')
const [cargo, setCargo] = useState('')
const [imagem, setImagem] = useState('')
const [time, setTime] = useState('')

    return(  
        <form className="form-container" onSubmit={enviarDados}>
            <h3>Preencha os dados para criar os cards do colaborador</h3>
           
            <Input nome="nome" 
            placeholder="digite o seu nome" 
            type="text"
            valor={nome}
            aoAlterado={valor => setNome(valor)} 
            required={true}/>

            <Input 
            nome="cargo" 
            placeholder="digite o seu cargo" 
            type="text" 
            required={true} 
            valor={cargo} 
            aoAlterado={valor => setCargo(valor)}/>
            
            <Input 
            nome="imagem" 
            placeholder="insira uma image" 
            type="text" 
            required={true} 
            valor={imagem} 
            aoAlterado={valor => setImagem(valor)}/>
            
            <ListaSuspensa 
            lista={minhaLista} 
            label="selecione uma opçao"
            aoAlterado={valor => setTime(valor)} />
            <ButtonSubmit>Criar você </ButtonSubmit>

        </form>
    )
}

export default Form