
import Colaborador from "../Colaborador/Colaborador"
import "./Time.css"


const Time = (props) => {
    return(

        <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nomeTime}</h3>
            
        </section>
    )
}



export default Time