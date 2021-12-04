const ModuleScopePlugin = require("react-dev-utils/ModuleScopePlugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

const webpack = require("webpack");
const ModuleFederationPlugin = webpack.container.ModuleFederationPlugin;

const path = require("path");

const deps = require("./package.json").dependencies;
const appSrcPath = path.resolve(__dirname, 'src');

module.exports = {

    entry: "./src/index.tsx",

    output: {
        chunkFilename: '[name]-chunk.js?t=' + new Date().getTime() /* cache busting */,
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js"],
        plugins: [

            new ModuleScopePlugin(appSrcPath),

        ].filter(Boolean),
    },

    module: {
        rules: [{
            oneOf: [
                {
                    test: /\.tsx?$/,
                    exclude: [/node_modules/],
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/react", "@babel/env"],
                            }
                        },
                        {
                            loader: "ts-loader",
                            options: {
                                transpileOnly: true,
                            },
                        },
                    ]
                },
                {
                    test: /\.css$/,
                    use: ["style-loader", "css-loader"],
                },
                {
                    loader: require.resolve("file-loader"),
                    exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
                    options: {
                        name: "static/media/[name].[hash:8].[ext]",
                    }
                },
            ]
        }],
    },

    plugins: [

        new CleanWebpackPlugin(),

        new ModuleFederationPlugin({
            name: "ic3",
            shared: {
                ...deps,

                // https://github.com/mui-org/material-ui/issues/21916
                "@mui/private-theming": {singleton: true},
                "@mui/material/styles": {singleton: true},
                "@mui/styles": {singleton: true},
                "@emotion/styled": {singleton: true},
                "@emotion/core": {singleton: true},

                "react": {singleton: true},
                "react-dom": {singleton: true},
            },
        }),

    ].filter(Boolean),

};
