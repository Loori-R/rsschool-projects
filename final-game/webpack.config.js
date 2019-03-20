const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
    entry: {
        'js/app.js': './src/app.js',
    },
    output: {
        path: __dirname + '/dist/',
        filename: "[name]"
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        },
        {
            test: /\.html$/,
            exclude: /node_modules/,
            use: {
                loader: 'html-loader'
            }
        },
        {
            test: /\.(png|svg|jpg|gif)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'images/[name].[ext]',
                }
            }]
        },
        {
            test: /\.(ttf)$/,
            use: [{
                loader: 'file-loader',
                options: {
                    name: 'fonts/[name].[ext]',
                }
            }]
        }
        ]
    },
    devtool: 'inline-source-map',
    mode: 'development',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
    performance: {
        hints: false,
        maxEntrypointSize: 512000,
        maxAssetSize: 512000
    },
    plugins: [
        new CopyWebpackPlugin([{
            from: 'src/uploads/sounds/*',
            to: 'sounds/[name].[ext]',
            toType: 'template'
        },
        {
            from: 'src/screens/home/index.html',
            to: ''
        },
        {
            from: 'src/uploads/character/*',
            to: 'images/[name].[ext]'
        },
        {
            from: 'src/uploads/background/*',
            to: 'images/background/[name].[ext]'
        },
        {
            from: 'src/uploads/images/*',
            to: 'images/[name].[ext]'
        }
        ]),
    ]
};