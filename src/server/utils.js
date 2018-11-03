import React from 'react';
import { renderToString } from 'react-dom/server';
import {StaticRouter,Route } from 'react-router-dom';
import { matchRoutes } from 'react-router-config'
import routes from '../Routes';
import {Provider } from 'react-redux';
import getStore from '../store'

export const render = (req,res) => {
    const store = getStore();
    //如果在这里，我们能够拿到异步数据，并填充到store之中
    //store里面到底填充什么，我们不知道，我们需要结合当前用户请求地址，和路由，去判断
    //如果用户访问 / 路径，我们就那home组件的异步数据
    //如果用户访问login路径，我们就拿login组件的异步数据
    //根据路由的路径，来往store里面加数据

    const matchedRoutes = matchRoutes(routes, req.path)

     // 根据路由的路径，来往store里面加数据
        // routes.some(route => { 只加载简单路由
        //     const match = matchPath(req.path, route);
        //     if (match) {
        //         matchRoutes.push(route);
        //     }
        // });


    //让 matchRoutes里面所有的组件，对应的loadData方法执行一次
    const promises = [];
    matchedRoutes.forEach(item => {
        if(item.route.loadData){
            //将store当做参数传进loadData函数，在对应web页面执行对应方法，
            promises.push(item.route.loadData(store))
        }

        console.log(item.route.loadData(store))
    })

    //当所有异步操作执行完成之后再执行后面的操作
    Promise.all(promises).then(() =>{
        // console.log(store.getState())
        const content = renderToString((
            <Provider store={store}>
                <StaticRouter location={req.path} context={{}}>
                    <div>
                        {routes.map(route =>(
                            <Route {...route}/>
                        ))}
                    </div>
                </StaticRouter>
            </Provider>
        ));
        res.send(
             `
            <html>
                <head>
                    <title>ssr</title>
                </head>
                <body>
                    <div id="root">${content}</div>
                </body>
                <script src="./index.js"></script>
            </html>
        `
        );
    })
    

    //服务器渲染阶段需要异步请求数据，让数据填满页面，之后js接管页面，
    //由于没有连接设置好中间代理服务器，故只能使用客户端js渲染。但是除了接口问题，其他功能已经ok了


    
}




