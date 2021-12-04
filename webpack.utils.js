const HtmlWebpackPlugin = require("html-webpack-plugin");
const ForkTsCheckerWebpackPlugin = require("fork-ts-checker-webpack-plugin");

module.exports = {

    createHtmlWebpackPlugin: () => {

        return new HtmlWebpackPlugin({
            template: "./public/index.html",
            favicon: "./public/favicon.png",
            hash: true,

        });

    },

    createForkTsCheckerWebpackPlugin: (env) => {

        return new ForkTsCheckerWebpackPlugin({

            async: env === "development",

            eslint: {
                files: "./src/**/*.{ts,tsx}"
            }

        });

    },

};
