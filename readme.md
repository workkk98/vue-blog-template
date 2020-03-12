# vue-blog-template

> 项目原本的初衷是描述我搭建自己学习blog的过程，以及我想通过blog去记录一些自己学习的经历。
> 但是前期记录这些文档，真是非常麻烦。最具体的例子就是 如果需要去摘记一些codes我得截图，或者是我得手写标签
> 我觉得这毫无疑问是效率极低的。随着我学习webpack，我意识到有很多好的办法去解决这一问题。使用markdown文件去撰写日志，我想很多人都能使用。它不再局限于我个人的blog。

**所以，vue-blog-template诞生了**🎉🎉🎉


#### 侧边栏导航组件

通过更新config文件夹中的navList.js文件，修改侧边栏内容
例如
```
  {
    title: '标题',
    path: '',
    list: [
      { subtitle: '副标题', path: '对应url地址' }
    ]
  }
```

#### plan

1. 整理下项目内容，不需要的东西可以移除了
2. 完善README.md(也相当于完善项目介绍的那个markdown)
3. 整一下scss  @ues问题 这肯定和webpack脱不了关系
4. 写一个loader? highlight.js 和 markdown.js