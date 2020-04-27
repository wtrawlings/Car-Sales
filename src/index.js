import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from "redux";
import { Provider } from "react-redux"; //bridge piece
import { carReducer } from "./reducer/carReducer" 


import 'bulma/css/bulma.css';
import './styles.scss';
//Step 1- create redux store and connect it to react app
//you have to put a reducer inside the create store
  //createStore uses reducer as a pass through
const store = createStore(carReducer);
console.log('current state: ', store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}> {/**this STORE is technically a prop that MUST be called 'store' */}
        <App />
    </Provider>, rootElement);

//Do we wrap PROVIDER OUTside of ROUTER? Yes Router is on the INside!