/*
 * @Author: chriscindy
 * @Date:   2016-06-16 17:24:18
 * @Last Modified by:   chriscindy
 * @Last Modified time: 2016-06-16 18:01:00
 */

module.exports = {
    entry: './main.js',
    output: {
        path: __dirname,
        filename: 'build.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel',
            exclude: /node_modules/
        }, {
            test: /\.vue$/,
            loader: 'vue',
        }]
    },
    babel: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
    }
}
