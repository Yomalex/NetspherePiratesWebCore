const path = require('path');
const webpack = require('webpack');
const { CheckerPlugin } = require('awesome-typescript-loader');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
    outputDir: './wwwroot/dist'
};

const config = {
    entry: {
        // Bundles used on specific pages
        homepage: './Frontend/Home/index.tsx',
        _Layout: './Frontend/_Layout.tsx',
        // Common libraries
        libs: [
            //'bootstrap',
            //'bootstrap/dist/css/bootstrap.css',
            'react-bootstrap',
            'react',
            'react-dom',
            'jquery'
        ]
    },
    output: {
        path: path.join(__dirname, paths.outputDir),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        rules: [
            {
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 50000,
                            name: 'assets/[name]_[hash].[ext]'
                        }
                    }
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            silent: true
                        }
                    },
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.(css|scss)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new ExtractTextPlugin({
            filename: 'styles/[name].css',
            allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "commons",
            filename: "commons.js",
        }),
        new webpack.SourceMapDevToolPlugin({
            moduleFilenameTemplate: path.relative(paths.outputDir, '[resourcePath]')
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
    }
};

module.exports = config;