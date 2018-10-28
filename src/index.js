
import express from 'express';
import Home from './containers/Home';
import React from 'react'
import { renderToString } from 'react-dom/server';


const app = express();

app.get('/', function (req, res) {
    res.send(
        renderToString(<Home />)
    );
});

var server = app.listen(3000);