import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'

const resolve = dir => path.resolve(__dirname, dir)

const config = {
  entry: './src/index.js',
  output: {
    path: resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: resolve('src/index.html')
    })
  ]
}

export default config
