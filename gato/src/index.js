import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, {css}from 'styled-components'

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    result:''
   }
   this.handleComparativa = this.handleComparativa.bind(this);
 }

   handleComparativa(e){



   console.log(e.keyCode);


    // console.log("evento-->",e);
    // console.log("target o input--->",e.target.value);
     var abecedario = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q',
      'R','S','T','U','V','W','X','Y','Z'];

     abecedario.forEach((element, index)=> {


       if(e.target.value == element){
         console.log("primer validacion-->");
         if(index==26) {
           this.setState({
             result:abecedario[0]
           })
          console.log("segunda validacion-->");
          console.log(abecedario[0]);
         return
       }

          this.setState({
            result:abecedario[index+1]
          });
          console.log(abecedario[index+1]);
     }

     if (e.keyCode == 8){


     }

     });



   }

   // handleSubmit(e) {
   //     e.preventDefault();
   //     this.setState({
   //       letra:'',
   //       result:''
   //     });
   //   }


     handleInputChange(e) {
       const {value, name} = e.target;
       // console.log(value, name);
       this.setState({
         [name]: value
       });
   }


  render() {

    return (
      <div>
      <textarea value={this.state.result} onKeyUp={this.handleComparativa} name="texto">  </textarea>
      </div>
    );
  }
}



// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
