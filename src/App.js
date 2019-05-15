import React, { Component } from 'react';
import './App.css';
import Botao from './button';

class App extends Component {
  state={
    cor:""
  }
  geraTexto = () => {
   if(this.state.cor === 'red') return <p>Você apertou o botão vermelho</p>;
   if(this.state.cor === 'green') return <p>"Você apertou o botão verde"</p>;
  }
  handleClick = (cor) => {
    this.setState({cor});
  }
  render(){
    return (
    <div className='App'>
   <Botao cor="red" callback={this.handleClick}/>
   <Botao cor="green" callback={this.handleClick}/>
  {this.geraTexto()}
    </div>
  );
  }
}
export default App;


