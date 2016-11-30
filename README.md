# Webpack + React

注意：本实例中的`webpack` _v2.1.0_, `extract-text-webpack-plugin` _v2.0.0_。目前网络上很多例子都是`webpack` _v1.x_和`extract-text-webpack-plugin` _v1.x_的版本。不同的版本中主要是`webpack.config.js`写法有点差异。

## 功能列表
1. 按模块编译文件（js、css、image等）；
1. 支持资源部署（合并、压缩、Hash化、最小化）；
1. 支持watch模式，自动编译；
1. 支持Css局部化；
1. 编译 jsx、es6、scss 等资源；
1. 按指定模块化规范自动包装模块

## Issues
1. 复写模块里的CSS
1. 实时编译和刷新浏览器
1. 自动引入静态资源到相应html 页面
1. 发布到远端机
1. 全局替换指定字符串
1. 本地接口模拟服务
1. 自动给 css 添加浏览器内核前缀
1. 语法检查

## 使用步骤

1. 安装依赖
    ```
    npm install
    ```

1. 运行npm
    ```
    npm start
    ```

    也可以用`npm run dev`，修改源码后就会自动编译了。

1. 访问页面

    直接用浏览器打开`index.html`文件，或者配置服务器打开`index.html`文件。


## 参考
1. [Webpack v2.x](https://webpack.js.org/)
1. [Get filenames from webpack compilation stats](https://webpack.js.org/guides/caching/#get-filenames-from-webpack-compilation-stats)
