
import Colaborador from "../Colaborador/Colaborador"
import "./Time.css"


const Time = (props) => {
    return((props.colaboradores.length >0) && 
    <section className="time" style={{backgroundColor: props.corSecundaria}}>
            <h3 style={{borderColor: props.corPrimaria}}>{props.nomeTime}</h3>
            <div className="cards-container">
                 {props.colaboradores.map(colaborador => <Colaborador nome={colaborador.nome} key={colaborador.nome} cargo={colaborador.cargo}/>)}
            </div>
            
        </section>
    )
}



export default Time