import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom"

import { Provider } from "react-redux"
import { store } from "./Data/Store"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Router>
        <Provider store={store}>
          <App store={store}/>
        </Provider>
      </Router>
  
);

// </React.StrictMode>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
