module.exports = function (api) {
  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        // useBuiltIns: 'entry',
        // corejs: 3,
        modules: false,
        targets: '>1%',
      },
    ],
    '@babel/preset-react',
    '@emotion/babel-preset-css-prop'
  ]
  const plugins = [["module-resolver", {"root": ["./src"]}]]

  return {
    presets,
    plugins,
  }
}
