import React, { Component } from 'react'
import { GlobalStyled } from './style'
import { Provider } from 'react-redux'
import Header from './common/header/Header'
import store from './store/index'

class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <GlobalStyled/>
          
          <Header/>
        </Provider>
    );
  }
}

export default App;
