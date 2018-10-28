import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter} from 'react-router-dom';
import Routes from '../Routes';
import { createStore } from 'redux';
import {Provider } from 'react-redux';

export const render = (req) => {
    const reducer = (state ={name: 'golang'}, action)=>{
        return state
    }
    const store = createStore(reducer)

    const content = renderToString((
        <Provider store={store}>
            <StaticRouter location={req.path} context={{}}>
                {Routes}
            </StaticRouter>
        </Provider>
        
    ));
    return `
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="./index.js"></script>
        </html>
    `;
}




