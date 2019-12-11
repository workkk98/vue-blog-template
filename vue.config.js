const configWebpack = require('./webpack.config')

module.exports = {
  // 部署应用包时的基本URL。
  publicPath: process.env.NODE_ENV === 'production'
    ? '/xiaofanslog/'
    : '/',
  // 输出文件夹 默认dist
  outputDir: 'docs',
  // 该对象最终会合并入最终的webpack配置
  configureWebpack: configWebpack,
  // 通过plugins lint各个文件
  lintOnSave: process.env.NODE_ENV !== 'production'
}
