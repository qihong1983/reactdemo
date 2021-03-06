let webpack = require('webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let htmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require("extract-text-webpack-plugin");
let CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var path = require("path");

var rootdir = __dirname;
// console.log(path.resolve(__dirname, './common/libs/jquery/jquery-1.11.1.min.js'));
module.exports = {
    devtool: '#source-map',
    entry: {
        build: "./src/app.js",
    },
    output: {
        path: "./build/",
        filename: "[name].js"
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        modules: [
            path.resolve('./build'),
            path.resolve('./node_modules')
        ]
    },
    watch: true,
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: "css-loader"
                }),
                exclude: "./node_modules/"
            }, {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            /*{
                       test: /\.module\.less$/,
                       loader: ExtractTextPlugin.extract(
                           'css?sourceMap&modules&localIdentName=[local]___[hash:base64:5]!!' +
                           'postcss!' +
                           `less-loader?{"sourceMap":true,"modifyVars":${JSON.stringify(theme)}}`
                       ),
                   },*/
            {
                test: /\.js?$/,
                loaders: ['babel-loader?presets[]=es2015&presets[]=react'],

                exclude: "./node_modules/",
                include: path.resolve(__dirname, "src")
            }, {
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192' //  <= 8kb的图片base64内联
            }, {
                test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10&minetype=application/font-woff'
            }, {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10&minetype=application/octet-stream'
            }, {
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'file-loader'
            }, {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                loader: 'url-loader?limit=10&minetype=image/svg+xml'
            }
        ]
    },
    devServer: {
	contentBase: "./build", //以public为根目录提供文件
        colors: true,
        historyApiFallback: true,
        inline: true,
        quiet: true,
	host: "39.106.140.80",
        port: 3002
    },
    resolve: {
        alias: {
            // 'jquery': path.resolve(rootdir, './src/common/libs/jquery/jquery-1.11.1.min.js')
        }
    },
    plugins: [
        new webpack.ProvidePlugin({}),
        new ExtractTextPlugin("styles.css"),
        new CopyWebpackPlugin([{
            from: __dirname + '/src'
        }]),
        new htmlWebpackPlugin({
            title: "demo",
            filename: "index.html",
            template: "templates/demo.html",
            hash: true, // true | false。如果是true，会给所有包含的script和css添加一个唯一的webpack编译hash值。这对于缓存清除非常有用。
            inject: false,
            chunks: ["build"]
        }),
        new CommonsChunkPlugin("libs")
    ]
}
