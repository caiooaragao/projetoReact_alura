
import './Rodape.css'

import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
function Rodape(){
    return(
        <div className='container'>  
                <ul className='rodape'>
                    <li><a href='facebook.com.br'> <FaFacebook /> </a> </li>
                    <li><a href='twitter.com.br' > <FaTwitter /> </a> </li>
                    <li><a href='instagram.com.br' > <FaInstagram /> </a> </li> 
                </ul>
            <div className='sessao'>
                <img src ='./img/logo.png' alt='' />
            </div>
            <div className='text'>
                <p>Desenvolvido por <a href='https://github.com/caiooaragao' >Caio aragao</a></p>
            </div>
        </div>
    )
}


export default Rodape