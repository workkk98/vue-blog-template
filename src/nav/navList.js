// 配置侧边栏
// navList结构对象数组，
// 对象结构 title：string=>标题，list：数组=>小标题以及对应路由

const navList = [
  {
    title: '主页',
    path: '/index',
    list: []
  },
  {
    title: '项目介绍',
    path: '/introduce',
    list: [
      { subtitle: '使用手册', path: '/introduce/guide' },
      { subtitle: '项目原理', path: '/introduce/markdown' }
    ]
  }
]

export default navList
