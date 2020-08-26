const currentProcess = process.env.npm_lifecycle_event
const path = require("path")

const postCSSPlugins = [
  require('postcss-import'),
  require('postcss-mixins'),
  require('postcss-simple-vars'),
  require('postcss-nested'),
  require('postcss-hexrgba'),
  require('autoprefixer')
]

let config = {
  entry: "./app/assets/js/App.js",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader?url=false",
          {
            loader: "postcss-loader",
            options: {
              plugins: postCSSPlugins,
            },
          },
        ],
      },
    ],
  }
}

if (currentProcess == 'dev') {
  config.output = {
    filename: "main.js",
    path: path.resolve(__dirname, "app"),
  }
  config.devServer = {
    contentBase:path.join(__dirname, "app"),
    hot: true,
    port: 3000,
    host: '0.0.0.0'
  }
  config.mode = 'development'
}

if (currentProcess == 'build') {
  config.output =  {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  }
  config.mode = 'production'
}


module.exports = config