// 配置侧边栏
// config结构对象数组，
// 对象结构 title：string=>标题，list：数组=>小标题以及对应路由

const config = [
  {
    title:'介绍',
    path: '/',
    list: []
  },
  {
    title:'js相关',
    list:[
      { subtitle: 'generator', path: '/js/generator'}
    ]
  },
  {
    title:'vue相关',
    list:[
      { subtitle: '简单讲讲initData()', path: '/vue/initData'},
      { subtitle: 'computed和watch', path: '/vue/computedwatch'}
    ]
  },
  {
    title:'组件',
    list:[
      { subtitle: '整体布局', path: '/components/layout'},
      { subtitle: 'table', path: '/table'}
    ]
  }
]


export default config