const path = require('path')

module.exports = {
    entry: {
        index: './src/index.js'
    },
    // entry: {
    //     'page/decorate': './src/page/decorate/index.js',
    // },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
    module: {
        rules: [{
            test: /\.js?$/,
            include: [
                path.resolve(__dirname, 'src'),
            ],
            loader: "babel-loader"
        }, ]
    }
}