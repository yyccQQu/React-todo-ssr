import React from 'react';
import ReactDom from 'react-dom';
import routes from '../Routes';
import { BrowserRouter,Route } from 'react-router-dom';
import { createStore,applyMiddleware } from 'redux';
import {Provider } from 'react-redux';
import getStore from '../store'

const App = () => {
    return (
        <Provider store={getStore()}>
            <BrowserRouter >
                <div>
                    {routes.map(route =>(
                        <Route {...route}/>
                    ))}
                </div>
            </BrowserRouter>
        </Provider>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'))