import logo from './logo.svg';
import './App.css';
import React from 'react';

function App ( props ){


 const modificarNome = event => {
    console.log(event.target.value)
   
 }

  const criaComboBox = () =>{
    const opcoes = [ "fulano", "detal" ]
    const comboBoxOpcoes = opcoes.map( opcao => <option>{opcao}</option>)
    return(
        <select>{comboBoxOpcoes}</select>
    )
  }


  
    const MeuComboBox = () => criaComboBox()
    return(
     <>
        <input className="text-centralizado" type="text" value={props.nome} onChange={modificarNome} />
        <h1>Hello from App, {props.nome}, que possui {props.idade} anos.</h1>
        
        <MeuComboBox/>
        
      </>
    
    )
  
}

export default App;
