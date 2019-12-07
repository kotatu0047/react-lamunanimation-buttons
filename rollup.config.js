import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import external from "rollup-plugin-peer-deps-external"
import pkg from './package.json'

const input = 'src/index.js'
const extensions = ['js', 'jsx', '.ts', 'tsx']
const babelPresets = [
  [
    '@babel/preset-env',
    {
      loose: true,
      modules: false,
      targets: '>1%',
    },
  ],
  '@babel/preset-react',
]

export default [
  {
    input,
    output: {
      file: pkg.module,
      format: 'esm',
      exports: 'named',
      sourcemap: true
    },
    plugins: [
      babel({
        babelrc: false,
        extensions,
        presets: babelPresets,
        plugins: [],
        exclude: 'node_modules/**',
      }),
      external(),
      resolve({extensions}),
      commonjs({
        include: 'node_modules/**',
        extensions: ['.js', '.coffee'],
        ignoreGlobal: false,
        sourceMap: false,
        namedExports: undefined,
        ignore: ['conditional-runtime-dependency'],
      }),
    ],
  },
]
