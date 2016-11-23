var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// var CompressionPlugin = require("compression-webpack-plugin");

var webpackConfig = {
    entry:{
        common: ['react', 'react-dom'],
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
                exclude: /node_modules/,
                options: {
                    presets: ['es2015', 'react']
                },
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
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: "common.js",
        }),

        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        }),

        // new ReactToHtmlPlugin('index.html', 'index.js', {
        //   template: ejs.compile(fs.readFileSync(__dirname + '/src/template.ejs', 'utf-8'))
        // })

    ],

    externals: {
        // react: 'react',
        // "react-dom": 'react-dom',
    }
};

if(process.env.NODE_ENV == 'production') {
    var optimizations = [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        }),

        // new CompressionPlugin({
        //         asset: "[path].gz[query]",
        //         algorithm: "gzip",
        //         test: /\.js$|\.html$/,
        //         threshold: 10240,
        //         minRatio: 0.8
        // }),
    ];

    webpackConfig.plugins = webpackConfig.plugins.concat(optimizations);
}

module.exports = webpackConfig;