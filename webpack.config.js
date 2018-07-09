// webpack.config.js
var Encore = require("@symfony/webpack-encore");

Encore
  // the project directory where all compiled assets will be stored
  .setOutputPath("twig_app/public/build")

  // the public path used by the web server to access the previous directory
  .setPublicPath("/build")

  // will create public/build/xxx.js and public/build/xxx.css
  .addEntry("base", "./assets/js/base.js")
  .addEntry("shortcut", "./assets/js/shortcut.js")

  // enable source maps during development
  .enableSourceMaps(!Encore.isProduction())

  // empty the outputPath dir before each build
  .cleanupOutputBeforeBuild()

  // show OS notifications when builds finish/fail
  .enableBuildNotifications()

  // create hashed filenames (e.g. app.abc123.css)
  // .enableVersioning()

  // allow sass/scss files to be processed
  // .enableSassLoader()
  .enableLessLoader();

// export the final configuration
module.exports = Encore.getWebpackConfig();
