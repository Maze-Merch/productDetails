const path = require('path');

module.exports = {
  entry: "./client/src/index.js",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          "babel-loader"
        ]
      }
    ]
  },
  resolve: {
    extensions: [
      "*", ".js", ".jsx"
    ]
  },
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "bundle.js"
  }
};
