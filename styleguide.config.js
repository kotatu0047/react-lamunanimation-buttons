module.exports = {
  components: 'src/components/**/*.{js,jsx,ts,tsx}',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.(js|ts)x?$/,
          exclude: /node_modules/,
          loader: "babel-loader"
        }
      ]
    }
  },
}
