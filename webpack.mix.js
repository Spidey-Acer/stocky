const mix = require("laravel-mix");

const MomentLocalesPlugin = require("moment-locales-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

mix.js("resources/src/main.js", "public")
    .js("resources/src/login.js", "public")
    .vue();

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
});

// If you're in development, you might want source maps
if (!mix.inProduction()) {
    mix.sourceMaps();
}
