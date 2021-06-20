const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin({})
        ]
    },
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000
    },
    output: {
        filename: 'toggler-cl.min.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'Icons',
        libraryTarget: 'umd',
        libraryExport: "default",
        publicPath: ''
    },
});
