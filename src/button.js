import React, {Component} from 'react';
class Botao extends Component {    
render() { 
return(
    <div>
        <button className="green" onClick={this.handleClick}>Clique Aqui!</button>
        <button  className="red"onClick={this.handleClick}>Clique Aqui!</button>
</div>
)
}
}
export default Botao;