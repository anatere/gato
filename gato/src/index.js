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
  background: #D5B1D0;
  border: 5px solid palevioletred;
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
  constructor() {
    super();
    this.state = {
        result: '',
        fecha_final:new Date(''),
        days:'',
        day:'',
        yearc:'',
        weekend:'',
        daysw:'',
        yeara:''
      }
        this.handleDia = this.handleDia.bind(this);
        // this.handleDiaAño = this.handleDiaAño.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
}





handleDia(e)
 {
    e.preventDefault();

    console.log("valor-->",this.state.num1);
    var valorInputDate = this.state.num1;
    var result = new Date(valorInputDate).value;
    // var res = result.split("-");
    // var num1= res[2]+"-"+res[1]+"-"+res[0];
   console.log("result-->",result);


    // var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    // var daysw = days[result.getDay()];
    // console.log("el dia es:--->",daysw);
    //
    var start = new Date(result.getFullYear(), 0, 0);
    var diff = result - start;
    var oneDay = 1000 * 60 * 60 * 24;
    // // console.log("oneDay-->",oneDay);
    var day = Math.floor(diff / oneDay);
    var weekend = (day /7 )+1;
    var fecha_final = new Date('2019-5-23');
    var resultado = result - fecha_final;
    var yearc = (resultado / oneDay);
    var yeara = (day-365);
    console.log("faltan para terminar el año-->",yeara);
    console.log("faltan para tu cumpleaños-->",yearc);
    console.log("numero de semana-->",weekend);
    console.log('dia del año: ' + day);

}

  handleSubmit(e) {
   e.preventDefault();
   this.setState({
     result:'',
     num1:'',
     fecha_final:new Date(''),
     days:'',
     day:'',
     yearc:'',
     weekend:'',
     daysw:'',
     yeara:''
   });
}
handleInputChange(e) {
    const {value, name} = e.target;
    // console.log(value, name);
    this.setState({
      [name]: value
    });
}

  render(){

    return (

    <div>
      <form onSubmit={this.handleDia}>
      <Title>
      <h1>Fechas</h1>
      </Title>
      <h4> Ingrese una fecha </h4>
      <Input
        type="date"
        id="num1"
        name="num1"
        value={this.state.num1}
        onChange={this.handleInputChange}
        />

        <h4> El dia es: </h4>
        <Input
        type="text"
        name="num2"
        value={this.state.daysw}
        onChange={this.handleInputChange}
        />

        <h4> El dia del año es: </h4>
        <Input
        type="text"
        name="num2"
        value={this.state.day}
        onChange={this.handleInputChange}
        />

       <h4> La semana es </h4>
       <Input
       type="text"
       name="num3"
       value={this.state.weekend}
       onChange={this.handleInputChange}
       />

       <h4> Ingrese su cumpleaños </h4>
       <Input
       type="Date"
       name="num3"
       value={this.state.fecha_final}
       onChange={this.handleInputChange}
       />


       <h4> Faltan para tu cumpleaños </h4>
       <Input
       type="text"
       name="num3"
       value={this.state.yearc}
       onChange={this.handleInputChange}
       />

       <h4> Faltan para terminar el año</h4>
       <Input
       type="text"
       name="result"
       value={this.state.yeara}
       />

       <Button
       type="submit">
       Resultado
       </Button>




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
