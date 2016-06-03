var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: 'source-map',
    entry: '../src/js/index.js',
    output: {
        path: __dirname + "/../build",
        filename: "bundle.min.js"
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
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
