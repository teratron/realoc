import {merge} from 'webpack-merge'
import {common, paths as path} from './webpack.config.ts'
import webpack from 'webpack'
//import paths from './webpack.config'

//const {merge} = require('webpack-merge')
//const common = require('./webpack.config')
//const path = require('./webpack.config').paths

const config: webpack.Configuration = merge(
    common({
        styleLoader: 'style-loader',
        isBuildDev: true
    }),
    // @ts-ignore
    ...{
        mode: 'development',
        devtool: 'eval-cheap-module-source-map',
        output: {
            filename: 'static/js/[name].js'
        },
        devServer: {
            static: path.build + '/static',
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
