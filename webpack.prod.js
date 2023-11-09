const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const SemverWebpackPlugin = require('semver-extended-webpack-plugin')
const {merge} = require('webpack-merge')
const common = require('./webpack.config')
const paths = require('./paths')

const isBuildDev = process.env.NODE_ENV === 'build-dev'

const config = merge(
    common({
        styleLoader: MiniCssExtractPlugin.loader,
        isBuildDev: isBuildDev
    }),
    {
        mode: 'production',
        output: {
            path: paths.build,
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
                }),
                new SemverWebpackPlugin({
                    files: [paths.root + '/package.json'],
                    incArgs: ['patch'],
                    console: true,
                    buildDate: true
                })
            ]
        }
)

module.exports = new Promise(resolve => {
    resolve(config)
})
