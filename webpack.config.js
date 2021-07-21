const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js' 
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    resolve: {
        alias: {
            '@': '../src',
            vue: '../node_modules/vue/dist/vue.esm-browser.js'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 1234,
        hot: true // HMR
    }
}