const mix = require("laravel-mix");
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
            sassOptions: {
                quietDeps: true, // This will suppress dependency warnings
            },
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
});

mix.options({
    processCssUrls: false,
});

if (!mix.inProduction()) {
    mix.sourceMaps();
}
