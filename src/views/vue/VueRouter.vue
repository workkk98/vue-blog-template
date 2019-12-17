<template>
 <div>
   <main-view-title :mainTitle="mainTitle"></main-view-title>
   <subtitle :subtitle="subtitle"></subtitle>
   <div>
     整个hooks的触发过程在vue-router官网中介绍的很清楚 <a href="#vue/initData">传送门</a>
     <br>
     但是我想讲些不同的
     你可以认为在调用$router.push()的过程中，实际上有两个队列按照先后顺序依次出队
    <subtitle :subtitle="tohone"></subtitle>
    <ul>
      <li>beforeRouteLeave(组件失活)</li>
      <li>beforeEach(在导航开始之前)</li>
      <li>beforeRouteUpdate(相同的组件更新)</li>
      <li>beforeEnter(确认导航)</li>
      <li>resolveAsyncComponents(解决,同步,组件)</li>
    </ul>
    你可以先理解resolveAsyncComponents这个函数，是触发队列2的导火线。然后情况比我形容的复杂的多
    <subtitle :subtitle="tohtow"></subtitle>
    <ul>
      <li>beforeRouteEnter(进入激活的组件)</li>
      <li>beforeResolve(导航结束之前)</li>
      <li>afterEach(导航结束之后)</li>
      <li>执行 用户自己 在beforeRouterEnter函数中 传入next回调函数的参数(这个参数也是回调函数)</li>
    </ul>
    或许这样,你会容易记忆的多。但事实上这样的分组和源码也是一致的。
    <br>
    然后我就想提几个我之前不会使用的写法。
    <br>
    1.beforeRouteLeave和beforeRouteUpdate,可以写成函数数组的形式，然而beforeRouteEnter不可以
    <br>
    2.尝试使用name去匹配组件,而不是path(因为name是从字典中找寻找，而path则需要遍历，需要验证下)
    <br>
    3.beforeRouteEnter中实例并未渲染成功,所以在函数内不得使用this。但您可以在next回调函数中传入回调函数,
    do something,因为此时已渲染完毕
    <br>
    4.每个hook都得调用next()，否则不会进入到下一环节。afterEach实际上就是队列的尾部，写法3.我陈述的，是源码
    自动会执行的cbs数组
   </div>
    <div>
      有些地方可能词不达意，敬请谅解。最好的方法还是自己去反复的看源码。这是我自己的一些理解 <a href="">传送门</a>
    </div>
 </div>
</template>
<script>
export default {
  name: 'vue-router',
  data () {
    return {
      mainTitle: 'vue-router的一些技巧',
      subtitle: 'hooks流程',
      tohone: '队列1',
      tohtow: '队列2'
    }
  }
}
</script>
<style scoped>

</style>
