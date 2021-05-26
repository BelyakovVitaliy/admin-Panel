import React from 'react';
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";
import {notificationReducer} from './compoments/NotificationBox/reducers'
import App from "./App";
import {filterVisibleReducer} from "./compoments/Filters/reducer";


const store = createStore(combineReducers({notificationReducer, filterVisibleReducer}), {});

ReactDOM.render(
    <Provider store={store}><App /></Provider>,
  document.getElementById('root')
);

