## markdown

之前这个项目文章主要内容(也就是右侧内容)是通过手动输入标签和内容。

> 使用markdown文件去撰写我的博客日志


**具体方法**
* 使用webpack，html-loader和markdown-loader去解析文件
* 通过import() 动态加载该内容
* 使用v-html渲染内容

```
const markdownModule = import('../../markdowns/components/markdown.md')
export default {
  name: 'markdown',
  data () {
    return {
      title: 'markdown',
      content: ''
    }
  },
  async created () {
    const markdownText = await markdownModule
    this.content = markdownText.default
  }
}
```

现在唯一的问题就是
1. markdown需要一个全局样式
2. 应用到项目其他的栏目中去