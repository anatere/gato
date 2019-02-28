import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styled, { css } from 'styled-components'


class Game extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {


    return (
      <div>
      Hola
      </div>
    );
  }
}

// ========================================

ReactDOM.render(<Game />, document.getElementById("root"));
