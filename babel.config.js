module.exports = function (api) {
  const isTest = api.env('test')

  api.cache(true)

  const presets = [
    [
      '@babel/preset-env',
      {
        // useBuiltIns: 'entry',
        // corejs: 3,
        loose: true,
        modules: false,
        targets: '>1%',
      },
    ],
    '@babel/preset-react',
  ]
  const plugins = [["module-resolver", {"root": ["./src"]}]]
  if (isTest) plugins.push(["@babel/transform-modules-commonjs"])

  return {
    presets,
    plugins,
  }
}
