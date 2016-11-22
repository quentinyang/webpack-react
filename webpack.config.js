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
        rules: [
            {
                test: /\.jsx?$/,
                loader: "babel-loader",
                options: {
                    presets: ['react']
                }
            },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallbackLoader: "style-loader",
                    loader: "css-loader?localIdentName=[name]__[local]___[hash:base64:5]!postcss-loader"
                }),

                exclude: [
                  path.resolve(__dirname, "modules/common")
                ]
            },
        ],

    },

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
                // Provide the Local Scope plugin to postcss-loader:
                postcss: [ require('postcss-local-scope') ],
            }
        })


        // new ReactToHtmlPlugin('index.html', 'index.js', {
        //   template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
        // })
    ],

    externals: {

    }
}
