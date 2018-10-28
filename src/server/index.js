//将打包好的react代码放入public文件夹，之后通过中间app.use()方法引入js脚本，完成同构
import express from 'express';
import React from 'react'
import {render} from './utils';

// 客户端渲染
// React代码在浏览器上执行，消耗的是用户浏览器的性能

//服务器端渲染
// React代码在服务器上执行，消耗的是服务器端的性能

const app = express();
app.use(express.static('public'))//静态文件直接到根目录下public、文件夹中去找



app.get('*', function (req, res) {
    res.send(render(req));
});

var server = app.listen(3000);

// react同构代码的流程
//
// 服务器端运行React、代码渲染出html页面
// 发送html给浏览器
// 浏览器接收内容展示
// 浏览器加载js文件
// js中的react代码在浏览器端重新执行
// js中的react代码接管页面的操作