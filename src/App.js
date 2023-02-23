
import { useState } from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import Form from './components/Form/Form';
import Time from './components/Time/Time';

function App() {

  const [colaboradores, setColaboradores] = useState([])
  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }


  return (
    <>
      <Banner/>
      <Form aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      <Time nomeTime="junior"/>
      <Time nomeTime="pleno"/>
      <Time nomeTime="senior"/>

    </>
  )
}

export default App;


