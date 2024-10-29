const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

mix.js("resources/src/main.js", "public")
    .js("resources/src/login.js", "public")
    .vue()
    .sass(
        "resources/src/assets/styles/sass/themes/lite-purple.scss",
        "public/css",
        {
            implementation: require("sass"),
        }
    );

mix.webpackConfig({
    output: {
        filename: "js/[name].min.js",
        chunkFilename: "js/bundle/[name].[hash].js",
    },
    plugins: [
        new MomentLocalesPlugin(),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: ["./js/*"],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    "sass-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
});

// Disable processing URLs in CSS/Sass files
mix.options({
    processCssUrls: false,
});

// If you're in development, you might want source maps
if (!mix.inProduction()) {
    mix.sourceMaps();
}
