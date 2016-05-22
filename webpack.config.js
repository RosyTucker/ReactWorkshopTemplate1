const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const appPath = suffix => path.resolve(__dirname, suffix);

const PATHS = {
    js: appPath('src/js'),
    sass: appPath('src/sass'),
    jsEntry: appPath('src/js/main.js'),
    htmlTemplate: appPath('src/templates/index.ejs'),
    outputJsFolder: appPath('dist/client')
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
    include: PATHS.sass,
    loader: ExtractTextPlugin.extract('style-loader', 'css-loader!postcss-loader')
};

const sassPlugin = new ExtractTextPlugin('application.css', { allChunks: false });

const htmlPlugin = new HtmlWebpackPlugin({
    title: 'CodeNight',
    filename: 'index.html',
    template: PATHS.htmlTemplate
});

module.exports = [
    {
        entry: [
            'babel-polyfill',
            PATHS.jsEntry
        ],
        output: {
            path: PATHS.outputJsFolder,
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
