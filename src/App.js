import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Wallet from './components/Wallet';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={ Login } />
          <Route exact path="/carteira" component={ Wallet } />
        </Switch>
      </div>
    );
  }
}

export default App;
