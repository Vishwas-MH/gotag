import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "react-toastify/dist/ReactToastify.css";
import { Provider } from 'react-redux';
import employeeStore from "../src/redux/store"
//import {createStore} from "redux";
//import managerReducer from './redux/reducer';
//import { composeWithDevTools } from "redux-devtools-extension";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={employeeStore}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);