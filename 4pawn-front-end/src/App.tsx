import React from 'react';
import Router from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <Router/>
    </div>
  );
};

export default App;
