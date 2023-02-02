import React, { Component } from 'react';
import Header from './Header';
import WalletForm from './WalletForm';

class Carteira extends Component {
  render() {
    return (
      <div>
        <Header />
        <WalletForm />
        Carteira
      </div>
    );
  }
}

export default Carteira;
