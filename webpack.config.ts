import * as path from 'path'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import webpack from 'webpack'
//import HtmlWebpackPlugin from 'html-webpack-plugin'

//const CopyWebpackPlugin = require('copy-webpack-plugin')
//const HtmlWebpackPlugin = require('html-webpack-plugin')
//const path = require('path')
//const root = path.resolve(__dirname, './')
const root: string = './'

export const paths = {
    //root: './',
    root: root,
    //root: path.resolve(__dirname, './'),
    src: path.resolve(root, 'src'),
    build: path.resolve(root, 'build'),
    public: path.resolve(root, 'public')
}

//module.exports = props => {
export const common = (props: { styleLoader: string; isBuildDev: boolean }): webpack.Configuration => {
    return {
        entry: {
            main: paths.src + '/index.js'
        },
        module: {
            rules: [
                {
                    test: /\.m?ts$/i,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "swc-loader",
                        options: {
                            parseMap: true
                        }
                    }
                },
                {
                    test: /\.(sa|sc|c)ss$/i,
                    exclude: /node_modules/,
                    use: [
                        props.styleLoader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                postcssOptions: {
                                    plugins: [
                                        //'postcss-preset-env'
                                    ]
                                }
                            }
                        },
                        'sass-loader'
                    ]
                },
                {
                    test: /\.(hbs|handlebars)$/i,
                    exclude: /node_modules/,
                    loader: 'handlebars-loader',
                    options: {
                        helperDirs: [
                            paths.src + '/templates/helpers'
                        ],
                        partialDirs: [
                            paths.src + '/templates',
                            paths.src + '/templates/partials',
                            paths.src + '/templates/pages'
                        ]
                    }
                },
                {
                    test: /\.(svg|gif|png|jpe?g)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: props.isBuildDev
                            ? 'static/media/[name][ext]'
                            : 'static/media/[name].[hash][ext]'
                    }
                },
                {
                    test: /\.(woff(2)?|eot|ttf|otf)$/i,
                    type: 'asset/resource',
                    generator: {
                        filename: props.isBuildDev
                            ? 'static/fonts/[name][ext]'
                            : 'static/fonts/[name].[hash][ext]'
                    }
                }
            ]
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: paths.public,
                        globOptions: {
                            ignore: [
                                '**/*.DS_Store',
                                '**/*.html'
                            ]
                        },
                        noErrorOnMissing: true
                    }
                ]
            }),
            /*...require('fs')
                .readdirSync(paths.src + '/templates/pages')
                .filter(fileName => fileName.endsWith('.js'))
                .map(page => new HtmlWebpackPlugin({
                    template: paths.src + `/templates/pages/${page}`,
                    filename: page.replace(/\.js/gi, '.html'),
                    inject: 'body',
                    minify: !props.isBuildDev
                }))*/
        ],
        resolve: {
            modules: [paths.src, 'node_modules'],
            extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.sass', '.scss'],
            alias: {
                '~': paths.src,
                '@': paths.src + '/static/js',
            }
        }
    }
}
