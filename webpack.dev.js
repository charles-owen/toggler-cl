const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: 'toggler-cl.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Icons',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: ''
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000,
        hot: true,
        publicPath: '/dist/',
        index: '/dist/index.html'
    }
});
