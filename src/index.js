import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import App from "./App";
import {adminPanelReducer} from "./compoments/redux/reducers";


const store = createStore(combineReducers({adminPanelReducer}), {});

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

