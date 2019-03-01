import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'


class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        num1: '',
        num2: '',
        num3: '',
        result: '',
        result2: '',
        result3: ''
      }
        this.handleComparativa = this.handleComparativa.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
}
handleComparativa(num1, num2, num3 ){
  var  result, result2, result3
        result= (num1>num3) ? num1 : num3;
        result2 = (num2>num3) ? num2 : num3;
        return result3 = (result<result2) ? result : result2;

  }
  handleSubmit(e) {
   e.preventDefault();
  // this.props.onAddTodo(this.state);
   this.setState({
     num1: '',
     num2: '',
     num3: '',
     result: '',
     result2: '',
     result3: '',
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
      <input
        type="text"
        name="num1"
        value={this.state.num1}
        onChange={this.handleInputChange}
        placeholder="Ingrese numero"
        />

      <h4> Segundo valor </h4>
      <input
        type="text"
        name="num2"
        value={this.state.num2}
        onChange={this.handleInputChange}
        placeholder="Ingrese numero"
        />

      <h4> Tercer valor </h4>
      <input
      type="text"
      name="num3"
      value={this.state.num3}
      onChange={this.handleInputChange}
      placeholder="Ingrese numero"
      />

      <button
      type="submit">
      Comparar
      </button>

      <h4> Resultado </h4>
      <input
        type="text"
        name="result3"
        value={this.state.result3}

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
