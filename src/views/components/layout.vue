<template>
  <div class="layout-container">
    <h1 class="title">关于整个网站的布局,及建设方向</h1>
    <div>{{afterTitle}}</div>
    <ul>
      <li>引入预处理器</li>
      <li>引入一些评价rank类工具等好玩、好看的东西</li>
      <li>可能得加个搜索栏（如果文章足够多）</li>
    </ul>
    <div>那首先这个服务器，你可以打开控制台一目了然，最主要我将整个布局通过rem这个单位来控制，在小型屏幕上表现并不好，
      也是将来需要优化的点，
      左侧栏是position:fixed加上overflow控制左侧导航栏，
      那右侧就是通过vue-router，来控制渲染的一个主视图
    </div>
  </div>
</template>

<script>
export default {
  name: 'layout-component',
  data () {
    return {
      afterTitle: '我可以先强调这个网站页面视图方面目前只用纯css，但后期会考虑引入一些预处理器以及好玩的视图框架（因为我没ui哈哈哈）,下面是一些计划清单',
      content: ''
    }
  }
}
</script>

<style scoped>
.title {
  border-bottom: 1px solid #eaecef;
}
</style>
