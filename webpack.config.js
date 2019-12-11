const path = require('path')
module.exports = {
  // ... 其它选项
  // 编译时eslint检查 vue.config.js lintOnSave字段开启
  // 不包含对 src/plugins/icons文件夹的检查
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: [
          path.resolve(__dirname, 'node_modules/'),
          path.resolve(__dirname, 'src/plugins/icons')
        ]
      }
    ]
  }
}
