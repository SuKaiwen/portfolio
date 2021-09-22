import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import NavigationBar from './NavigationBar';

ReactDOM.render(
  <React.StrictMode>
    <div style={{fontFamily: "Montserrat"}}>
      <NavigationBar />
      <div class = "back">
          <div class = "main-wrapper">
              <App />
          </div>
      </div>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
