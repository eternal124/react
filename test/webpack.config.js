const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const pkg = require("./package.json")

module.exports = {
    entry : {
        main : [
            'react-hot-loader/patch',
            'webpack-dev-server/client?http://0.0.0.0:9000',// WebpackDevServer host and port
            'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
            "./src/entry"
        ]
    },

    output : {
        path: path.join(process.cwd(), './dist/'),//生成目录
        publicPath: "/",
        filename : '[name].[hash].js',
        chunkFilename: '[name].[chunkhash].chunk.js'
    },

    resolve: {
        extensions: ['.js', '.jsx', '.json', '.css'], // 会使用的后缀名 
    },

    module : {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader'],
            },
            {
                test:/\.(png|jpg)$/,
                loader:'url?limit=40000'
            }
        ]
    },

    devtool : "cheap-module-eval-source-map",

    plugins : [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': '"production"'
            }
        }),
        new HtmlWebpackPlugin({
            title : pkg.name,
            filenaem : 'usePage.html',
            template : './src/usePage.html',
            inject: true,
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                removeAttributeQuotes: true
                // more options:
                // https://github.com/kangax/html-minifier#options-quick-reference
            }
        })
    ],

    devServer : {
        historyApiFallback: true,
        hot : true,
        noInfo : true,
        contentBase: path.join(__dirname, "dist"),
        clientLogLevel: "error",
        port: 9000,
        stats: "errors-only"
    }

}