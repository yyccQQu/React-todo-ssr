//将打包好的react代码放入public文件夹，之后通过中间app.use()方法引入js脚本，完成同构
import express from 'express';
import Home from './containers/Home';
import React from 'react'
import { renderToString } from 'react-dom/server';

// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

//服务器端渲染
// React代码在服务器上执行，消耗的是服务器端的性能

const app = express();
app.use(express.static('public'))//静态文件直接到根目录下public、文件夹中去找

const content = renderToString(<Home />);

app.get('/', function (req, res) {
    res.send(`
        <html>
            <head>
                <title>ssr</title>
            </head>
            <body>
                <div id="root">${content}</div>
            </body>
            <script src="./index.js"></script>
        </html>
        `);
});

var server = app.listen(3000);