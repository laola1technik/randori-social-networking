var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : false,
    entry: path.resolve(__dirname, "src/js/application.js"),
    output: {
        path: path.resolve(__dirname, "public/assets/js"),
        filename: "application.min.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['env']
                }
            }
        ]
    }
};