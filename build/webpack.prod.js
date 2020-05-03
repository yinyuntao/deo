const Webpack = require('webpack');
const WebpackConfig = require('./webpack.config');
const WebpackMerge = require('webpack-merge');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = WebpackMerge(WebpackConfig,{
    mode:'production',
    plugins:[
        new CleanWebpackPlugin()
    ]
})