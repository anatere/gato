import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'

const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Input = styled.input.attrs(({ size }) => ({
  margin: size || "1em",
  padding: size || "1em"
}))`
  color:black ;
  font-size: 1em;
  border: 2px solid orange;
  border-radius: 3px;
`;

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    result:'',
    cadena:'',
    letra:''
   }
   this.handleTexto = this.handleTexto.bind(this);
   this.handleInputChange = this.handleInputChange.bind(this);
 }

   handleTexto(e){
     e.preventDefault();
     var cadena=this.state.cadena;
     console.log("cadena-->",cadena);
     var palabra = cadena.split(" ");
     console.log(palabra);
     var letra=this.state.letra;
     console.log("letra-->",letra);
     var indices = [e];
     for(var i = 0; i < cadena.length; i++) {
  	 if (cadena[i].toLowerCase() === letra) indices.push(i);

     }
     console.log("indices-->",indices.length);
     var resultadoFinal = indices.length;


    this.setState({
    result: resultadoFinal
    })
   }

   handleInputChange(e) {
      e.preventDefault();
       const {value, name} = e.target;
       // console.log(value, name);
       this.setState({
         [name]: value
       });
     }


  render() {

    return (
      <form >
        <div>
          <textarea
          value={this.state.cadena}
          onChange={this.handleInputChange}
          id="textareabox"
          name="cadena"
          placeholder="Escribe aqui">
          </textarea>

          <Input
            type="text"
            name="letra"
            value={this.state.letra}
            onChange={this.handleInputChange}
            />

          <Button
          name="contar"
          onClick={this.handleTexto} >
          Contar
          </Button>

          <Input
            type="text"
            name="result"
            value={this.state.result}
            />

        </div>
      </form>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
