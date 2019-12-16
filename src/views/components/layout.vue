<template>
  <div class="layout-container">
    <h1 class="title">关于整个网站的布局</h1>
    <div>{{afterTitle}}</div>
    <div>{{productStructure}}</div>
    <ul>
      <li>响应式布局: 通过mixins全局混入+vuex，使得在访问页面时确认终端尺寸，并触发样式更换</li>
      <li>
        非移动端: 左侧栏fixed，右侧标准盒模型，偏移左侧宽度，移动端: 右侧宽度100%，左侧自动隐藏，点击菜单栏可
        显示，点击灰色图层隐藏
      </li>
      <li>SVG</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'layout-component',
  data () {
    return {
      afterTitle: '因为我想在这个博客里练习一些基础的东西，所以我决定整个bolg使用的技术就是html+css+vue.js，不使用其他的组件框架等',
      content: '',
      productStructure: '网站结构'
    }
  }
}
</script>

<style scoped>
.title {
  border-bottom: 1px solid #eaecef;
}
</style>
