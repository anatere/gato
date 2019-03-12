import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'


// const Title = styled.h1`
//   font-size: 1.7em;
//   text-align: center;
//   color: palevioletred;
// `;

// const Button = styled.button`
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   background: #D5B1D0;
//   border: 5px solid palevioletred;
//   border-radius: 3px;
// `;

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
  constructor() {
    super();
     var letra='X';
      var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N',
    'Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  //  console.log(abecedario);
    abecedario.forEach(function(element, index) {
    // console.log(element);
     if(letra == element) {
       console.log(element);
       console.log(index+1);
     }
    });



}

  render() {


    return (
      <div>
      <Input
      type="text"
      placeholder="Ingrese numero"
      />
      </div>
    );
  }
}


// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
