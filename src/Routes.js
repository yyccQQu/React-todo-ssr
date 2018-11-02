import React from 'react'
import { Route } from 'react-router-dom'
import Home from './containers/Home'
import Login from './containers/Login'

export default[
    {
        path: '/',
        component: Home,
        exact: true,
        loadData: Home.loadData,
        key: 'Home',
        routes: [{
            path: '/ttt',
            component: Login,
            exact: true,
            key: 'ttt'
        }]
    },{
        path: '/login',
        component: Login,
        exact: true,
        key: 'Login'
    }

]
