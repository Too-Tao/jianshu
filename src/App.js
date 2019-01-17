import React, { Component } from 'react'
import { GlobalStyled } from './style'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './common/header/Header'
import store from './store/index'
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component {
  render() {
    return (
      
        <Provider store={store}>
          <div>
          <GlobalStyled/>
          <Header/>
          <Router>
            <div>
            <Route exact path="/" component={Home}/>
              <Route path="/detail" component={Detail}/>
            </div>
          </Router>
          </div>
        </Provider>
    );
  }
}

export default App;
