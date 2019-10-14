import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const supportedPaymentMethods = [
    {
      supportedMethods: 'basic-card',
      data: {
        supportedNetworks: ['visa', 'mastercard']
      }
    }
  ];
  const paymentDetails = {
    total: {
      label: 'Total',
      amount:{
        currency: 'EUR',
        value: 20
      }
    }
  };

  const doPayment = async () => {
    const paymentRequest =   new PaymentRequest(
      supportedPaymentMethods,
      paymentDetails,
      {}
    );
    const paymentResponse = await paymentRequest.show();
    paymentResponse.complete('success');
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={doPayment}>Pay</button>
      </header>
    </div>
  );
}

export default App;
