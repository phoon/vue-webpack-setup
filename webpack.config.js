const path = require('path');
const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'bundle.js'
    },
    module: {
        rules: [
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
        new VueLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src'),
            vue: 'vue/dist/vue.esm-browser.js'
        }
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 1234,
        hot: true // HMR
    }
}
