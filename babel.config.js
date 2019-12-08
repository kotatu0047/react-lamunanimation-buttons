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
const plugins = []

module.exports = function (api) {
  // api.cache(true)
  const isTest = api.env('test')
  if (isTest) plugins.push(["@babel/transform-modules-commonjs"])

  return {
    presets,
    plugins,
  }
}
