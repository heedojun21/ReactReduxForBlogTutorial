
//copy this and paste it to webpack.config.js when deploy production mode.

var webpack = require('webpack');
const path = require("path");


module.exports = {
  entry: [
   // './src/index.js'
    path.resolve(__dirname, './src/index.js')
  ],

  output: {
    path: path.join(__dirname),
    filename: "bundle.js"
  },


  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel'

      },

      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.gif$/, loader: "url-loader?mimetype=image/png" },
      { test: /\.woff(2)?(\?v=[0-9].[0-9].[0-9])?$/, loader: "url-loader?mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9].[0-9].[0-9])?$/, loader: "file-loader?name=[name].[ext]" }

    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },

  devServer: {
   historyApiFallback: true,
   contentBase: './',
   port: 3000
   }
};



