
const markdownsComponent = {
  index: function () {
    return import('@/markdowns/index.md')
  },
  introduceMarkdown: function () {
    return import('@/markdowns/introduce/markdown.md')
  },
  notFound () {
    return import('@/markdowns/404.md')
  }
}
const components = Object.keys(markdownsComponent)

// 根据规则返回字符串 例如path = /component/markdown 转换后 componentMarkdown
function getComponentName (path) {
  const pattern = /\/(\w+)/g
  // 如果path是 '/' 特殊处理下
  if (path === '/') {
    return 'index'
  }
  return path.match(pattern).reduce((prev, curr, index) => {
    if (index === 0) {
      return prev + curr.slice(1)
    } else {
      return prev + String.fromCharCode(curr.charCodeAt(1) - 32) + curr.slice(2)
    }
  }, '')
}

export default {
  getComponent (path) {
    // path匹配对应的markdown组件
    const formatPath = getComponentName(path)
    return components.indexOf(formatPath) > -1 ? markdownsComponent[formatPath]() : markdownsComponent.notFound()
  }
}
