"use strict"
{
    // Required to form a complete output path
    let path = require('path');

    // Plugin for cleaning up the output folder (bundle) before creating a new one
    const CleanWebpackPlugin = require('clean-webpack-plugin');

    // Path to the output folder
    const bundleFolder = "wwwroot/bundle/";

    module.exports = {
        // Application entry point
        entry: "./Scripts/main.js",

        // Output file
        output: {
            filename: 'script.js',
            path: path.resolve(__dirname, bundleFolder)
        },
        plugins: [
            new CleanWebpackPlugin([bundleFolder])
        ]
    };
}