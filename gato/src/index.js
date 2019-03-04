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
  color:black ;
  font-size: 1em;
  border: 2px solid orange;
  border-radius: 3px;
`;

class Game extends React.Component {
  constructor() {
    super();
    this.state = {
        year: '2019',
        month: '06',
        day: '18',
        result: '',
      }
        this.handleDia = this.handleDia.bind(this);
        // this.handleDiaAño = this.handleDiaAño.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleInputChange = this.handleInputChange.bind(this);
}





handleDia(e, moment)
 {
    e.preventDefault();
    var result = new Date();
    console.log("result--->",result.getDay());
    var days = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    console.log("el dia es:--->",days[result.getDay()]);

    var now = new Date();
    var start = new Date(now.getFullYear(), 0, 0);
    var diff = now - start;
    // console.log("diff-->",diff);
    var oneDay = 1000 * 60 * 60 * 24;
    // console.log("oneDay-->",oneDay);
    var day = Math.floor(diff / oneDay);
    // console.log("day-->",day);
    console.log('Day of year: ' + day);

//Cumpleaños
    var date_1 = new Date('2019-5-23');
    var date_2 = new Date('2019-3-4');

    var day_as_milliseconds = 86400000;
    var diff_in_millisenconds = date_2 - date_1;
    var diff_in_days = diff_in_millisenconds / day_as_milliseconds;

    console.log( "Cuantos dias faltan para mi cumpleaños" + " " + diff_in_days);

//Terminar el año
  var fecha_final = new Date('2020-01-01');
  var fecha_inicio = new Date('2019-3-4');

  var day_as_milliseconds = 86400000;
  var diff_in_millisenconds = fecha_inicio - fecha_final;
  var diff_in_days = diff_in_millisenconds / day_as_milliseconds;

  console.log( "Cuantos dias faltan para terminar el año" + " " + diff_in_days);
}



  // handleDiaAño({month,day}) {
  //     var result2 = new Date();
  //     day + dias anteriores
  //     return result2;
  //     console.log();
  //   }
  //
  //   handleMenosDiaAño({month,day}) {
  //       var result2 = new Date();
  //       day - dias cumpleaños
  //       return result2;
  //       console.log();
  //     }


//   handleSubmit(e) {
//    e.preventDefault();
//    var resultadofinal = this.handleComparativa(this.state)
//    this.setState({
//      result: resultadofinal,
//    });
// }
// handleInputChange(e) {
//     const {value, name} = e.target;
//     // console.log(value, name);
//     this.setState({
//       [name]: value
//     });
// }

      //console.log("el numero de en medio es--->",result3);
  render() {

    return (

    <div>
      <form onSubmit={this.handleDia}>
      <Title>
      <h1>Valor Medio</h1>
      </Title>
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
        placeholder="Ingrese  numero"
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
