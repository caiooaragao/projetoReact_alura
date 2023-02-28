
import "./Input.css"


interface CampoTextoProps {
    aoAlterado: (valor: string) => void
    nome:string
    required: boolean
    placeholder: string
    valor: string
    type: string
}

function Input({aoAlterado, nome, placeholder, required, type, valor}:CampoTextoProps){
    
   

    const aoDigitado = (e: React.ChangeEvent<HTMLInputElement>) => {
        aoAlterado(e.target.value)
    }
    
    return(
    
        <div className="input-container">
            <label htmlFor={nome}>{nome}</label>
            <input id={nome} onChange={aoDigitado} required={required} type={type} placeholder={placeholder} name={nome} value={valor}  />
        </div>
    )
}

export default Input