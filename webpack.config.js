const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'production',
    entry: {
        "main": "js/main.js",
    },
    output: {
        filename: "dist/[name].js",
        path: path.resolve(__dirname),
        publicPath: path.resolve(__dirname),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    path.resolve(__dirname, 'node_modules'),
                ],
                loader: 'babel-loader',
            },
            {
                test: /\.(scss|css|sass)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                    },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
        ],
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'manifest.json', to: 'dist' },
        ]),
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, `src`),
            `node_modules`,
        ],
    },
};