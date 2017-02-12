var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js');
var autoprefixer = require('autoprefixer');
var precss = require('precss');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');
var NODEMODULES_PATH = path.resolve(ROOT_PATH, 'node_modules');
var RCTUI_PATH = path.resolve(ROOT_PATH, 'node_modules/rctui');

new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"development"'
    }),

    module.exports = {
        entry: {
            app: [
                'webpack-dev-server/client?http://localhost:8080', //资源服务器地址
                'webpack/hot/only-dev-server',
                './src/app.js'
            ],
            //vendor: ['react','react-dom']
        },
        output: {
            path: path.join(__dirname, 'build/js'),
            filename: "app.js",
            publicPath: 'http://localhost:8080/build/js'
        },
        module: {
            loaders: [{
                test: /\.js?$/,
                include: [APP_PATH, RCTUI_PATH],
                loaders: ['babel?presets[]=react,presets[]=es2015,plugins[]=react-hot-loader/babel,plugins[]=transform-object-rest-spread']
            }, {
                test: /\.(css|less)$/,
                include: [APP_PATH, RCTUI_PATH],
                loader: 'style-loader!css-loader!postcss-loader!less-loader'
            }, {
                test: /\.scss$/,
                //loader: ExtractTextPlugin.extract('style', 'css', 'sass'),
                loader: "style!css!sass",
                include: APP_PATH
            }, {
                test: /\.(png|jpg|woff|svg|eot|ttf)$/,
                loader: 'url?limit=40000'
            },{ test: /\.css$/, loader: "style!css" }]
        },
        resolve: {
            extensions: ['', '.js', '.json']
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.NoErrorsPlugin(),
            //new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')//这是妮第三方库打包生成的文件
            new ExtractTextPlugin('[name].css')
            //commonsPlugin
        ],
        postcss: function() {
            return [autoprefixer, precss];
        }
    };