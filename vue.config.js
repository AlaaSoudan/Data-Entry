const { GenerateSW } = require("workbox-webpack-plugin");
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: process.env.NODE_ENV === "development" ? "/alnada/" : "",

  configureWebpack: {
    plugins: [new GenerateSW()]
  }
}
