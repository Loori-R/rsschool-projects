var path = require('path');

module.exports = {
    mode: 'development',
    entry: './assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: 'jshint-loader'
        }]
    },
    devServer: {
        overlay: true
    }
};