
import { useState } from 'react';
import './App.css';
import { IColaborador } from './compartilhado/interfaces/IColaborador';
import Banner from './components/Banner/Banner';
import Colaborador from './components/Colaborador/Colaborador';
import Form from './components/Form/Form';
import Rodape from "./components/Rodape/Rodape"
import Time from './components/Time/Time';

function App() {


  const times =[
    {
      nome: "Programaçao",
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: "Front-end",
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: "Data Science",
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: "Devops",
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Ux e Design',
      corPrimaria: '#DB6EBF',
      corSecundaria: '#FAE9F5'
    },
    {
      nome: 'Mobile',
      corPrimaria: '#FFBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Inovação e Gestão',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
    
  ]

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([])
  const aoNovoColaboradorAdicionado = (colaborador: IColaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }


  return (
    <>
      <Banner enderecoImagem='/img/banner.png' textoAlternativo='banner'/>
      <Form 
      
      times={times.map(time => time.nome)} 
      aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}
      />
      {times.map(time => <Time 
      key={time.nome} 
      nomeTime={time.nome} 
      corPrimaria={time.corPrimaria} 
      corSecundaria={time.corSecundaria}
      colaboradores={colaboradores.filter(colaborador => colaborador.time == time.nome)}
      />)} 
      <Rodape/>
      
    </>
    
  )
}

export default App;


