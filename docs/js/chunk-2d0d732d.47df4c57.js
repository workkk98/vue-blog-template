(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0d732d"],{7691:function(n,o){n.exports='<h2 id="markdown">markdown</h2>\n<p>之前这个项目文章主要内容(也就是右侧内容)是通过手动输入标签和内容。</p>\n<blockquote>\n<p>使用markdown文件去撰写我的博客日志</p>\n</blockquote>\n<p><strong>具体方法</strong></p>\n<ul>\n<li>使用webpack，html-loader和markdown-loader去解析文件</li>\n<li>通过import() 动态加载该内容</li>\n<li>使用v-html渲染内容</li>\n</ul>\n<pre><code>const markdownModule = import(&#39;../../markdowns/components/markdown.md&#39;)\nexport default {\n  name: &#39;markdown&#39;,\n  data () {\n    return {\n      title: &#39;markdown&#39;,\n      content: &#39;&#39;\n    }\n  },\n  async created () {\n    const markdownText = await markdownModule\n    this.content = markdownText.default\n  }\n}</code></pre><p>现在唯一的问题就是</p>\n<ol>\n<li>markdown需要一个全局样式</li>\n<li>应用到项目其他的栏目中去</li>\n</ol>\n'}}]);
//# sourceMappingURL=chunk-2d0d732d.47df4c57.js.map