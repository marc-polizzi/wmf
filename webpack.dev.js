const utils = require("./webpack.utils.js");
const {merge} = require("webpack-merge");
const common = require("./webpack.common.js");

module.exports = merge(common, {

    mode: "development",

    devtool: "source-map",

    output: {
        path: undefined,
    },

    devServer: {

        port: 3000,

        open: "console",

        historyApiFallback: true,

        client: {
            overlay: false,
        },

    },

    plugins: [

        utils.createHtmlWebpackPlugin(),
        utils.createForkTsCheckerWebpackPlugin("development"),

    ].filter(Boolean),

});
