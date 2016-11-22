var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');

module.exports = {
    entry:{
        biz: './biz.js',
        index: './index.js',
        },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        // rules: [
        //   {test: /\.(js|jsx)$/, use: 'babel-loader'}
        // ],

        loaders: [
            {
                test: /\.js|jsx$/,
                 loader: 'babel-loader',
                 query: {
                   presets: ['react']
                 }
            },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader')
            // },

            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract({
            //         fallbackLoader: "css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader",
            //         loader: "style-loader"
            //     })
            // },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    // fallbackLoader: "style-loader",
                    loader: "css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
                })
            },




            // { test: /\.css$/, loader: ExtractTextPlugin.extract({
            //     notExtractLoader: "style-loader",
            //     loader: "css-loader?sourceMap",
            //     publicPath: "../"
            // }) },

        ]
    },

    // Provide the Local Scope plugin to postcss-loader:
    // postcss: [ require('postcss-local-scope') ],

    devtool: "source-map",
    plugins: [

        new ExtractTextPlugin({
            filename: "css/[name].css",//[id]-[contenthash]
            // disable: false,
            allChunks: true
        }),

        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                postcss: [ require('postcss-local-scope') ],
            }
        })


        // new ReactToHtmlPlugin('index.html', 'index.js', {
        //   template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
        // })
    ]
}
