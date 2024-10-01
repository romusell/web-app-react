

const Webpack = require("webpack");
const WebpackDevServer = require('webpack-dev-server');
const webpackConfig = require("./webpack.config");

const compiler = Webpack(webpackConfig);
const devServerOptions = { ...webpackConfig.devServer, open: true };
const server = new WebpackDevServer(webpack(WebpackDevConfig), {
    https: true,
    hot: true,
    watch: true,
    contentBase: path.join(__dirname, 'src'),
    historyApiFallback: true
}).listen(1337, 'localhost', function(err, result) {
    if (err) {
        console.log(err);
    }
    console.log('Dev server running at https://localhost:1337');
});

