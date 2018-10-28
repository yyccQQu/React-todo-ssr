
const path = require('path');
const nodeExternals = require('webpack-node-externals')
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const serverConfig = {
    target: 'node',//打包服务器代码
    mode: 'development',
    entry: './src/server/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()]//辅助将服务端需要被打包的代码打包
}

module.exports = merge(baseConfig,serverConfig)