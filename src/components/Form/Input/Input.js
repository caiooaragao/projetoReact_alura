
import "./Input.css"

function Input(props){
    
   

    const aoDigitado = (e) => {
        props.aoAlterado(e.target.value)
    }
    
    return(
    
        <div className="input-container">
            <label htmlFor={props.nome}>{props.nome}</label>
            <input onChange={aoDigitado} required={props.required} type={props.type} placeholder={props.placeholder} name={props.nome}   />
        </div>
    )
}

export default Input