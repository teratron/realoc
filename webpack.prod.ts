import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {merge} from 'webpack-merge'
//import {common} from './webpack.config.ts'
import {common, paths as path} from './webpack.config.ts'
import webpack from 'webpack'
//import paths from './webpack.config'

//const MiniCssExtractPlugin = require('mini-css-extract-plugin')
//const {merge} = require('webpack-merge')
//const common = require('./webpack.config')
//const path = require('./webpack.config.ts').paths

const isBuildDev = process.env.NODE_ENV === 'build-dev'

const config: webpack.Configuration = merge(
    common({
        styleLoader: MiniCssExtractPlugin.loader,
        isBuildDev: isBuildDev
    }),
    // @ts-ignore
    ...{
        mode: 'production',
        output: {
            path: path.build,
            publicPath: 'auto',
            clean: true
        },
        performance: {
            hints: false,
            maxEntrypointSize: 512000,
            maxAssetSize: 512000
        }
    },
    isBuildDev
            ? {
                devtool: 'eval-source-map',
                output: {
                    filename: 'static/js/[name].bundle.js'
                },
                plugins: [
                    new MiniCssExtractPlugin({
                        filename: 'static/css/[name].bundle.css'
                    })
                ]
            }
            : {
                devtool: 'source-map',
                output: {
                    filename: 'static/js/[name].[contenthash].bundle.js'
                },
                plugins: [
                    new MiniCssExtractPlugin({
                        filename: 'static/css/[name].[contenthash].bundle.css'
                    })
                ]
            }
)

module.exports = new Promise(resolve => {
    resolve(config)
})
