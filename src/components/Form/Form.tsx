import React, { useState } from "react";
import Input from "./Input/Input";
import "./Form.css"
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import ButtonSubmit from "../ButtonSubmit/ButtonSubmit";
import { IColaborador } from "../../compartilhado/interfaces/IColaborador";

interface FormularioProps{
    aoColaboradorCadastrado: (colaborador: IColaborador) => void,
    times: string[],
    

}


function Form(props: FormularioProps){



    const enviarDados = (e: React.FormEvent<HTMLFormElement>) =>{ 
        e.preventDefault()
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
           
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
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
            itens={props.times}
            label="selecione uma opçao"
            value={time}
            aoAlterado={valor => setTime(valor)} />
            <ButtonSubmit>Criar você </ButtonSubmit>

        </form>
    )
}

export default Form