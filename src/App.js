import React from 'react';
import './App.css';
import Counters from './components/counter/counters';
import Navigation from './components/navbar/nav';
import Payments from './components/payment/payment';

const App  = () => {
    return (
      <React.Fragment>
        <Navigation />
        <div className="container">
        <div className="col-md-6">
          <Counters />
        </div>
          <div className="col-md-6">
            <Payments />
          </div>
        </div>
      </React.Fragment>
    );
};

export default App;
