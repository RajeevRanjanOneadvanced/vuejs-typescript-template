const HtmlWebpackPlugin = require('html-webpack-plugin')
const CompressionPlugin = require("compression-webpack-plugin")
const path = require("path")

module.exports = {
    entry: {
        app: ["./src/app/main.ts"]
    },

    output: {
        path: path.resolve(__dirname, "../dist"),
        publicPath: "/assets/",
        filename: "app.js"
    },

    resolve: {
        extensions: ['.js', '.ts', '.html']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'awesome-typescript-loader'
            }{{#tslint}},
            {
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                include: [resolve('src'), resolve('test')],
                options: {
                    formatter: 'grouped',
                    formattersDirectory: 'node_modules/custom-tslint-formatters/formatters'
                }
            }{{/tslint}}
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CompressionPlugin()
    ]
}