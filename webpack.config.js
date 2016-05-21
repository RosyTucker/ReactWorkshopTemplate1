const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const babelLoader = {
    loader: 'babel-loader',
    test: /\.jsx?$/,
    include: [path.resolve(__dirname, 'src')],
    query: {
        presets: ['es2015', 'react']
    }
};

const htmlPlugin = new HtmlWebpackPlugin(
    {
        title: 'CodeNight',
        filename: 'index.html',
        template: 'index.ejs'
    }
);

module.exports = {
    entry: [
        'babel-polyfill',
        './src/main.js'
    ],
    output: {
        path: 'dist',
        filename: 'bundle.js'
    },
    plugins: [htmlPlugin],
    module: {
        loaders: [babelLoader]
    }
};
