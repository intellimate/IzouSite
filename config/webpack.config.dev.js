var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    devtool: 'cheap-module-eval-source-map',
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
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loaders: ["react-hot", "babel-loader"]
            }
        ]
    }
};
