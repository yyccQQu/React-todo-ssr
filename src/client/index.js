import React from 'react';
import ReactDom from 'react-dom';
import Routes from '../Routes';
import { BrowserRouter } from 'react-router-dom';
import Home from '../containers/Home';


const App = () => {
    return (
        <BrowserRouter>
            {Routes}
        </BrowserRouter>
    )
}


ReactDom.hydrate(<App />, document.getElementById('root'))