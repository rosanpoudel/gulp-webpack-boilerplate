// const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    App: "./src/assets/js/App.js"
  },
  output: {
    filename: "[name].js"
  },
  module: {
    rules: [{
      test: /\.js?$/,
      loader: "babel-loader"
    }]
  }
};