/**
 * Created by Avell on 22.02.2019.
 */


import React from 'react';
import {render} from 'react-dom';
import {createStore,compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'
import reducer from './reducers'
import UsersContainer from "./UsersContainer";


const store = createStore(
  reducer,
    compose(applyMiddleware(thunk))
);
render(
    <Provider store={store}>
        <UsersContainer/>
    </Provider>,document.getElementById('root'));