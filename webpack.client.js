//将打包好的react代码放入public文件夹，之后通过中间件引入js脚本，完成同构
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/client/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'public')
    },
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