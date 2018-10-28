import React from 'react';
import ReactDom from 'react-dom';
import Routes from '../Routes';
import { BrowserRouter } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import {Provider } from 'react-redux';
import thunk from 'react-thunk'


const reducer = (state ={name: 'golang'}, action)=>{
    return state
}
const store = createStore(reducer)

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                {Routes}
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'))