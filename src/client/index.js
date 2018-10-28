import React from 'react';
import ReactDom from 'react-dom';
import Routes from '../Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import {Provider } from 'react-redux';
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'))