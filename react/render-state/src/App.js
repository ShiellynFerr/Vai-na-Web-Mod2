import logo from './logo.svg';
import './App.css';
import React from "react";
import {Component} from 'react';
import planetas from './assets/planetas.png'
 /*
function oi() {
  return (<h1>Olá mundo</h1>
  );
}
*/
class Pessoa extends Component{

  state ={
    pessoa:[{
    nome: 'Shiellyn',
    idade: 20,
    comida: 'temaki',
    musica: ['pop', 'reggaton', 'mpb']
    }]};

    render(){
      return(
        <div>
          <h1>{this.state.pessoa[0].nome}</h1>
          <h2>{this.state.pessoa[0].idade}</h2>
          <h3>{this.state.pessoa[0].comida}</h3>
          <ul>
            <li>{this.state.pessoa[0].musica[0]}</li>
            <li>{this.state.pessoa[0].musica[1]}</li>
            <li>{this.state.pessoa[0].musica[2]}</li>
          </ul>
          <img src={planetas}/>
        </div>
        
      )
    }
}



export default Pessoa;