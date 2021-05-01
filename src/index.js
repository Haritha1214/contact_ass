import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import contactReducer from './Components/Reducers';
import {Provider} from 'react-redux'






const store=createStore(contactReducer)

ReactDOM.render(
<Provider store={store}><App/></Provider>

,document.getElementById('root'))