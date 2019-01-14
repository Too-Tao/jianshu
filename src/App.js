import React, { Component } from 'react'
import { GlobalStyled } from './style'
import Header from './common/header/Header'

class App extends Component {
  render() {
    return (
        <div>
          <GlobalStyled/>
          
          <Header/>
        </div>
    );
  }
}

export default App;
