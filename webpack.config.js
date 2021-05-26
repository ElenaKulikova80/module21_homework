// const path=require('path');
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// module.exports = {
//     entry: path.resolve(__dirname,'src/js/script.js'),
//     output: {
//         path: path.resolve(__dirname,'dist'),
//         filename:'main.js'
//     },
//     mode: 'production',
//     plugins: [new MiniCssExtractPlugin()],
//     module: {
//         rules: [
//           {
//             test: /\.scss$/i,
//             //['style-loader', MiniCssExtractPlugin.loader,'css-loader','sass-loader']
//             use: [{loader: MiniCssExtractPlugin.loader,
//                 options: {
//                     esModule: false,
//                   }
//                 },
//                 'style-loader', 
//                 'css-loader',
//                 'sass-loader'],
//           },
//           {
//              test: /\.(eot|woff|ttf|svg|png|jpe?g|gif)$/,
//                 use: [
//                   {
//                     loader: 'file-loader',
//                   },
//                 ],
//           },
//         ],
        
//     }
// }
const path=require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
    entry: path.resolve(__dirname,'src/js/script.js'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'main.js'
    },
    mode: 'production',
    plugins: [new MiniCssExtractPlugin()],
    module: {
        rules: [
          {
            test: /\.scss$/i,
            use: ['style-loader', {
              loader: MiniCssExtractPlugin.loader,
              options: {
                  esModule: false,
                }
              },'css-loader','sass-loader'
            ],
          },
          {
            test: /\.(eot|woff|ttf|svg|png|jpe?g|gif)$/,  
            use: ['file-loader'],              
          },
        ],
    }
}