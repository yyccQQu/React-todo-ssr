const path = require('path');
const webpack = require("webpack");
const merge = require("webpack-merge");

module.exports = {
    module: {
        rules: [{
            test: /\.js?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,//排除node_modules文件
            options: {
                presets: [
                    'react', 'stage-0',
                    ['env', {
                        targets: {
                            browsers: ['last 2 versions']
                        }
                    }]
                ]
            }
        }]
    },
    devServer: {
        contentBase: path.join(__dirname, "./public"),
        publicPath:'/',
        host: "127.0.0.1",
        port: "3000",
        overlay: true, // 浏览器页面上显示错误
        // open: true, // 开启浏览器
        // stats: "errors-only", //stats: "errors-only"表示只打印错误：
        hot: true, // 开启热更新
        //服务器代理配置项
        proxy: {
            '/api/*':{
                target: 'https://api.douban.com',
                secure: true,
                changeOrigin: true
            }
        }
    },
    plugins: [
        //热更新
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': '\"' + process.env.BASE_URL + '\"'
        })
          
    ],
    devtool: "source-map",  // 开启调试模式
}