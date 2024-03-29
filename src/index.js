import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';
import { store } from "./components/Redux/Store";
import { Provider } from "react-redux";


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);