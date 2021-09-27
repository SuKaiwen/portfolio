import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <div class = "loader" style={{fontFamily: "Montserrat", width:"100%"}}>
      <App />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
