const packageName = 'pinyin4js'

export default {
  input: 'index.mjs',
  output: [
    {
      file: `dist/${packageName}.esm.js`,
      format: 'es',
      name: packageName
    },
    {
      file: `dist/${packageName}.umd.js`,
      format: 'umd',
      name: packageName
    }
  ]
}