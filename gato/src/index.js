import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'


const Title = styled.h1`
  font-size: 1.7em;
  text-align: center;
  color: palevioletred;
`;

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
  color:palevioletred ;
  font-size: 1em;
  border: 2px solid orange;
  border-radius: 3px;
`;

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        num1: '',
        num2: '',
        num3: '',
        result: '',
      }
        this.handleComparativa = this.handleComparativa.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
}





handleComparativa({num1, num2, num3} ){
    var result= [num1,num2,num3]
    result.sort (function(a,b) {return a-b;})
    return result[1];
  }

  handleSubmit(e) {
   e.preventDefault();
   var resultadofinal = this.handleComparativa(this.state)
   this.setState({
     result: resultadofinal,
   });
}
handleInputChange(e) {
    const {value, name} = e.target;
    // console.log(value, name);
    this.setState({
      [name]: value
    });
}

      //console.log("el numero de en medio es--->",result3);
  render() {

    return (

    <div>
      <form onSubmit={this.handleSubmit}>
    
      <h4> Primer valor </h4>
      <Input
        type="text"
        name="num1"
        value={this.state.num1}
        onChange={this.handleInputChange}
        placeholder="Ingrese numero"
        />

      <h4> Segundo valor </h4>
      <Input
        type="text"
        name="num2"
        value={this.state.num2}
        onChange={this.handleInputChange}
        placeholder="Ingrese numero"
        />

      <h4> Tercer valor </h4>
      <Input
      type="text"
      name="num3"
      value={this.state.num3}
      onChange={this.handleInputChange}
      placeholder="Ingrese numero"
      />

      <Button
      type="submit">
      Comparar
      </Button>

      <h4> Resultado </h4>
      <Input
        type="text"
        name="result"
        value={this.state.result}

        />
      </form>
    </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
