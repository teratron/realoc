const {merge} = require('webpack-merge')
const common = require('./webpack.config')
const paths = require('./paths')

const config = merge(
    common({
        styleLoader: 'style-loader'
    }),
    {
        mode: 'development',
        devtool: 'eval-cheap-module-source-map',
        output: {
            filename: 'static/js/[name].js'
        },
        devServer: {
            static: paths.build + '/static',
            port: 9000,
            historyApiFallback: true,
            compress: true,
            open: true,
            hot: true
        }
    })

module.exports = new Promise(resolve => {
    resolve(config)
})
