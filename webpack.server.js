
const path = require('path');
const nodeExternals = require('webpack-node-externals')

module.exports = {
    target: 'node',//打包服务器代码
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },
    externals: [nodeExternals()],//辅助将服务端需要被打包的代码打包
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
    }


}