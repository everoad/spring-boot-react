module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '../src/main/resources/static/js/',
        filename: 'bundle.js'
    },

    devServer: {
        compress: true,
        publicPath: '/',
        inline: true,
        port: 7777,
        proxy: {
            "**": "http://localhost:8080"
        }
    },

    module: {
            loaders: [
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    exclude: /node_modules/,
                    query: {
                        cacheDirectory: true,
                        presets: ['es2015', 'react']
                    }
                }
            ]
        }
};