const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appPath = suffix => path.resolve(__dirname, suffix);

const PATHS = {
    js: appPath('src/js'),
    sass: appPath('src/sass'),
    jsEntry: appPath('src/js/main.js'),
    cssEntry: appPath('src/sass/home.scss')
};

const babelLoader = {
    loader: 'babel-loader',
    include: PATHS.js,
    query: {
        presets: ['es2015', 'react']
    }
};

const sassLoader = {
    name: 'css',
    test: /\.scss$/,
    exclude: /node_modules/,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
};

const sassPlugin = new ExtractTextPlugin('application.css', { allChunks: false });

const htmlPlugin = new HtmlWebpackPlugin({
    title: 'CodeNight',
    filename: 'index.html',
    template: 'templates/index.ejs'
});

module.exports = [
    {
        entry: [
            'babel-polyfill',
            PATHS.jsEntry,
            PATHS.cssEntry
        ],
        output: {
            path: 'dist/client',
            filename: 'bundle.js'
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        },
        plugins: [htmlPlugin, sassPlugin],
        module: {
            loaders: [babelLoader, sassLoader]
        }
    }
];
