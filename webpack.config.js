const path = require("path");
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

'use strict';

module.exports = {
    entry: "./src/App.js",                  //исходный файл
    output: {
        path: __dirname + '/output',             //путь к папке для конечного файла
        filename: "build.js",                    //имя конечного файла
    },

    watch: true,         //автоматическая пересборка при изменении файлов

    devServer: {
        contentBase: path.join(__dirname, '/output'),
        inline: true,
        port: 8080,
        hotOnly: true,         //  в браузере происходит hot reload, но при этом страница не перезагружается
        proxy: {
            //  проксируются запросы '/books' и вложенные (например '/books/list')
            '/books': {
                target: 'http://localhost:3000',
            }
        }
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                }]
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,

                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                ],
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    devtool: 'eval-source-map',
    plugins: [new ForkTsCheckerWebpackPlugin()]
};
