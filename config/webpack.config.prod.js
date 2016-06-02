var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: [
        'webpack-hot-middleware/client',
        '../src/js/index.js'
    ],
    output: {
        path: __dirname + "/../src",
        filename: "bundle.js"
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["babel-loader"]
            }
        ]
    }
};
