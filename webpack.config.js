var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

// var CompressionPlugin = require("compression-webpack-plugin");
var production = (process.env.NODE_ENV == 'production');
var jsFormatter = 'js/[name].js';
var imageFormatter = 'image/[name].[ext]';
var cssFormatter = 'css/[name].css';
var commonFormatter = 'common.js';
var publicPath = "dist/";//TODO::Config
var relativeDir = process.cwd();//__dirname

if (production) {
    jsFormatter = 'js/[name]-[chunkhash:10].js';
    imageFormatter = 'image/[name]-[hash:10].[ext]';
    cssFormatter = "css/[name]-[contenthash:10].css";
    commonFormatter = "common-[chunkhash:10].js";
    publicPath = "dist/"
}

var webpackConfig = {
    entry:{
        // vendor: ['react', 'react-dom'],//TODO::vendor
        /* fill others later. e.g: index: './app/index.js',*/
    },
    output: {
        path: path.resolve(relativeDir, 'dist'),
        filename: jsFormatter,//diff between dev and production
        chunkFilename: "[id].[chunkhash].bundle.js",
        publicPath: publicPath,
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
                    loader: "css-loader?localIdentName=[path][name]-[local]!postcss-loader"
                }),

                exclude: [
                  // path.resolve(relativeDir, "modules/common")//TODO::remove
                ]
            },

            {
                test: /\.(jpe?g|gif|png)$/,
                // loader: "url-loader",
                loader: "url-loader",
                query: {
                    limit: 10000,
                    name: imageFormatter,//diff between dev and production
                }
            },

        ],

    },

    devtool: "source-map",

    plugins: [

        // TODO::[HMR: hot module replacement](https://webpack.js.org/guides/hmr-react/)
        // new webpack.HotModuleReplacementPlugin(),

        new ExtractTextPlugin({
            // filename: "css/[name].css",//[id]-[contenthash]
            filename: cssFormatter,//diff between dev and production
            disable: false,
            allChunks: true
        }),

        new webpack.LoaderOptionsPlugin({
            // test: /\.xxx$/, // may apply this only for some modules
            options: {
                // Provide the Local Scope plugin to postcss-loader:
                postcss: [require('postcss-local-scope')],
                // if not set context, [path] would be empty.
                context: relativeDir,
            }
        }),

        new webpack.optimize.CommonsChunkPlugin({
            name: 'common',
            filename: commonFormatter,
        }),

        // new ReactToHtmlPlugin('index.html', 'index.js', {
        //   template: ejs.compile(fs.readFileSync(relativeDir + '/src/template.ejs', 'utf-8'))
        // })

    ],

    externals: {
        // react: 'react',
        // "react-dom": 'react-dom',
    }
};

// fill others here.
var fstool = require('./utils/fstool');
var entries = fstool.scanDir('./app');// TODO::config dir path
var entryInfo;
entries.forEach(function(entry, i) {
    entryInfo = path.parse(entry);
    if (entryInfo.ext == '.js') {
        webpackConfig.entry[entryInfo.name] = entry;
    }
});
// console.log(webpackConfig.entry);

if (process.env.NODE_ENV == 'production') {

    webpackConfig.plugins.push(
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: JSON.stringify('production')
          }
        })
    );

    // Uglify
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            output: {
                comments: false,
            },
        })
    );

    // Generate manifest json.
    var ManifestPlugin = require('webpack-manifest-plugin');
    webpackConfig.plugins.push(new ManifestPlugin({
        fileName: 'manifest.json'
    }));

    // webpackConfig.plugins.push(
    //     new CompressionPlugin({
    //             asset: "[path].gz[query]",
    //             algorithm: "gzip",
    //             test: /\.js$|\.html$/,
    //             threshold: 10240,
    //             minRatio: 0.8
    //     })
    // );

}

module.exports = webpackConfig;