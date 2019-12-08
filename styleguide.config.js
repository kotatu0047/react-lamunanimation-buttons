const path = require('path')

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
  title: "react-lamunanimation-buttons Components Library",
  styleguideDir: "dist-docs",
  moduleAliases: {
    "react-lamunanimation-buttons": path.resolve(__dirname, "src")
  }
}
