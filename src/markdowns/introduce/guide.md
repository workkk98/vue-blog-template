# 使用手册

👏欢迎使用，vue-blog-template。

### 基本使用

通过以下4个步骤👇，你就可以创建自己的博客啦。**提个醒，所有的md文件都在/markdowns目录下哦**

1. 撰写自己的markdown文件，假设名字叫**example.md**
2. 按照自己的喜好，把它归到某个文件夹下。例如我把这个**example.md**归档于 /markdowns/introduce 文件夹下，
所以它对应的path地址就是 /introduce/example 啦
3. 编辑/markdowns/route.js文件，在markdownsComponent对象中增加相应函数
4. 编辑/nav/navList.js文件，在navList对象中增加对应地址

**步骤3**

例如下面这个范本，你只需把文件路径映射成对应的url名称，并使用驼峰命名成函数即可。
```js
const markdownsComponent = {
  index: function () {
    return import('@/markdowns/index.md')
  },
  introduceIndex: function () {
    return import('@/markdowns/introduce/index.md')
  },
  introduceMarkdown: function () {
    return import('@/markdowns/introduce/markdown.md')
  },
  introduceGuide: function () {
    return import('@/markdowns/introduce/guide.md')
  },
  notFound () {
    return import('@/markdowns/404.md')
  }
}

```

**步骤4**

在nav文件下修改navList.js文件

```js
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

```

导航结构就是如此。暂时只有一级路径，后面这块内容还需要改进。。。