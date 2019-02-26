const autoprefixer = require("autoprefixer");
const mqpacker = require("css-mqpacker");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src',
    output: {
        filename: "bundle.js",
        path: __dirname + '/../content/js'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
                presets: [
                    "@babel/preset-react",
                    [
                        "@babel/preset-env",
                        {
                            targets: {
                                browsers: [
                                    "last 2 versions",
                                    "ie >= 10"
                                ]
                            }
                        }
                    ]
                ]
            }
          }
        },
        {
          test:/\.(s*)css$/,
          use: [MiniCssExtractPlugin.loader,'css-loader', 'sass-loader', {
            loader: "postcss-loader",
            options: {
                ident: "postcss",
                plugins: [
                    autoprefixer({
                        options: {
                            grid: true,
                            browsers: [
                                "last 2 version",
                                "ie >= 11",
                                "Android >= 5",
                                "ios >= 10"
                            ],
                            cascade: false
                        }
                    }),
                    mqpacker()
                ]}
            }]
      }
      ]
    },
    plugins: [            
      new MiniCssExtractPlugin({
                filename: "../css/bundle.css"
            })]
  };