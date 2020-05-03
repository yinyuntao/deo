const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === "production"
module.exports = {
    entry:path.resolve(__dirname,'../src/main.js'),
    output:{
        path:path.resolve(__dirname,'../dist'),
        filename:'bundle.[hash:3].js'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:['babel-loader'],
                // use:{
                //     loader:'babel-loader',
                //     options:{
                //         "presets": ["@babel/preset-env"],
                //         // plugins: [
                //         //     [
                //         //         "@babel/plugin-transform-runtime",
                //         //         {
                //         //             "corejs": 3
                //         //         }
                //         //     ]
                //         // ]
                //     }
                // },
                exclude:/node_modules/
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../public/index.html'),
            filename:'index.html',
            minify: {
                removeAttributeQuotes: false, //是否删除属性的双引号
                collapseWhitespace: false, //是否折叠空白
            },
            config:isDev?true:false
        })
    ]
}