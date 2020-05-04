const Webpack = require('webpack');
const WebpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = WebpackMerge(WebpackConfig,{
    mode:'production',
    plugins:[
        new CopyWebpackPlugin([{  //不需要压缩的文件 拷贝到dist目录下
            from: path.resolve(__dirname,'../public/js'),
            to: path.resolve(__dirname, '../dist'),
            flatten: true,
        }]),
        new CleanWebpackPlugin()
    ],
    optimization:{
        minimizer:[
            new OptimizeCssPlugin({}) //css代码压缩
        ]
    }
})