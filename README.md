# deo
###webpack4.0 + vue2.0x

####git bush here   
    <!-- 执行命令 touch .gitgnore  在该文件中添加需要忽视提交到github上的文件 如node_modules -->

####npm init 初始化项目  
    1. cnpm i webpack webpack-cli -D   //为了速度 使用cnpm[网速可以使用npm]
    2. 新建文件夹 build => webpack.config.js  生产开发公共文件
                          webpack.dev.js  开发环境下的配置
                          webpack.prod.js 生产环境下的配置及
    
    3. webpack.config.js 配置入口文件，出口文件 entry,output

    4. 配置module=>rules 下的js文件  通过babel-loader/@babel-loader 等将js代码转化为浏览器所识别的低级语法   兼容其他浏览器

    5. 解析html模板  指定模板文件 打包到 dist目录下的文件  cnpm i html-webpack-plugin -D

    6. 样式文件 css/less/sass   cnpm i style-loader css-loader less less-loader -D   
       通过postcss-loader autoprefixer 添加css3样式的前缀
       通过mini-css-extract-plugin 提取css文件  [生产模式下]
       通过optimize-css-assets-webpack-plugin 压缩css代码

    7. 通过url-loader file-loader 识别图片等资源  默认文件小于规定范围 转化为base64

    8. resolve  模块 方便开发人员编写代码

    9. exclude include  指定是否需要查找  提高效率

    10.webpack.dev.js  通化webpack-merge合并webpack.config.js 与 webpack.dev.js
        mode:'development',
        devServer :{ //热跟新配置   与webpack.HotModuleReplacementPlugin使用
            port:'3000',
            proxy:{  // 跨域代理

            }
        }
    11. webpack.prod.js 通化webpack-merge合并webpack.config.js 与 webpack.prod.js
            mode:'prodution',
            <!-- clean-webpack-plugin --> //清空之前打包文件
            <!-- copy-webpack-plugin --> //拷贝静态资源文件到dist目录下
    12. 配置多进程提高打包速度 ---测试