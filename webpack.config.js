const path = require(`path`);

let isDev = true;

module.exports = {
  context: path.resolve(__dirname, `source`),

  entry: {
    main: `./js/main.js`,
    vendor: `./js/vendor.js`,
  }, // Точка входа

  output: {
    filename: `[name].js`,
    path: path.join(__dirname, `build/js`),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: `/node_modules/`,
        loader: `babel-loader`,
        options: {
          presets: [`@babel/preset-env`],
        }
      }
    ]
  },
  mode: isDev ? `development` : `production`,
  devtool: isDev ? `eval-sourse-map` : `none`
};
