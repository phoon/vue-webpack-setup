const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // mode: 'development',
    mode: 'production',
    entry: {
        main: './src/app.js',
        list: './src/list.js'
    },
    output: {
        filename: 'js/[name].[contenthash:10].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/mini.css'
        }),
        new HtmlWebpackPlugin({
            title: 'VueJS',
            template: './src/html/index.html',
            filename: 'index.html',
            chunks: ['main'],
        }),
        new HtmlWebpackPlugin({
            title: 'Github lists',
            template: './src/html/list.html',
            filename: 'list.html',
            chunks: ['list']
        }),
    ],
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    externals: {
        vue: 'Vue',
        'axios': 'axios'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            // vue: 'vue/dist/vue.esm-browser.js'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 1234,
        hot: true // HMR
    }
}
