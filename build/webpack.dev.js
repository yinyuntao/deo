const Webpack = require('webpack');
const WebpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');

module.exports = WebpackMerge(WebpackConfig, {
    mode: 'development',
    devServer: {
        port: 3000,
        hot: true,
        contentBase: '../dist',
        compress: true,
        disableHostCheck: true,
        proxy: {
            "/api": {
                target: 'http://localhost:4000', //需要代理的域名
                pathRewrite: {
                    '/api': ''
                }
            }
        }
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin() //热更新
    ],
    devtool: 'cheap-module-eval-source-map' //开发环境下使用 方便调试代码
})