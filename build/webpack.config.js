const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const isDev = process.env.NODE_ENV === "production"
const VueLoaderPlugin = require('vue-loader/lib/plugin')
module.exports = {
    entry: path.resolve(__dirname, '../src/main.js'),
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'bundle.[hash:3].js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        compilerOptions: {
                            preserveWhitespace: false
                        }
                    }
                }]
            },
            {
                test: /\.js$/,
                use: ['babel-loader'],
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
                exclude: /node_modules/
            },
            {
                test: /\.(le|c)ss$/,
                use: [{
                    loader: isDev ? MiniCssExtractPlugin.loader : 'vue-style-loader',
                    options: {
                        publicPath: "../dist/css/",
                        hmr: isDev
                    }
                }, 'css-loader', 'less-loader', {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [require('autoprefixer')({ overrideBrowserslist: ['last 15 versions'] })]  //css 兼容性处理
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|jpeg|webp|svg|eot|ttf|woff|woff2)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 10240,
                        esModule: false,
                        fallback: {
                            loader: 'file-loader',
                            options: {
                                name: 'img/[name].[hash:8].[ext]'
                            }
                        }
                    }
                },
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'),
            filename: 'index.html',
            minify: {
                removeAttributeQuotes: false, //是否删除属性的双引号
                collapseWhitespace: false, //是否折叠空白
            },
            config: isDev ? true : false
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? 'css/[name].[hash:3].css' : '[name].css',
            chunkFilename: isDev ? 'css/[id].[hash:3].css' : '[id].css'
        }),
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: ['../src/components', 'node_modules'],
        alias: {
            'vue$': 'vue/dist/vue.runtime.esm.js',
            '@': path.resolve(__dirname, '../src'), //路径../src 用@来代替
            'assets': path.resolve(__dirname, '../src/assets'),
        },
        extensions: ['*', '.js', '.json', '.vue'],
        enforceExtension: false // 为true 省略后置失效
    }
}