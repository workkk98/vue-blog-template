<template>
 <div>
   <main-title :main-title="mainTitle"></main-title>
    <subtitle :subtitle="subtitle1"></subtitle>
    <div>
      这两个选项配置，都是用于监听各个属性的变化，而后执行callback <br>
      computed更多用于的是计算值，watch则是监听某个属性变化后执行用户定义的cb <br>
    </div>
    <subtitle :subtitle="subtitle2"></subtitle>
    <div>
      完全的使用的语法就如同下方,但实际上最多的用法就是声明 属性名:函数(), <br>
      而且在服务端渲染中，并不支持set
    </div>
    <div><img src="@/assets/computed_usage.png" alt=""></div>
    <div>
      实际定义在initComputed函数中 主要做了以下几件事 <br>
      1. 遍历computed,获得getter函数（也就是get函数）<br>
      2. 非SSR背景下,对每个属性创建相应的watcher,并放在watchers对象里 <br>
      3. 调用defineComputed(),实际上就是在vue实例上，通过Object.defineProperty(),设置各个属性的拦截器
    </div>
    <div>
      接下来我们看看对watcher的定义
      <img src="@/assets/computed_new_watcher.png" alt="">
    </div>
    <div>
      这里先记一下,形参( vm, getter, noop, computedWatcherOptions ) <br>
      computedWatcherOptions = { laze: true } <br>
      调用new Watcher() <br>
      初始化watcher的过程就不在列举了，注意几个参数 源码地址 /src/core/observe/watcher<br>
      this.dirty = this.lazy = true 以及与dep相关的参数 <br>
      this.value = this.laze ? undefined : this.get() => this.value=undefined <br>
    </div>
    <div>
      我们再回到，defineComputed()函数中 <br>
      这个函数的意义就是封装下用户定义的get，set方法 <br>
      并通过Object.defineProperty() 在这个vm实例上定义这个computed值
    </div>
    <div>
      <img src="@/assets/createComputedGetter.png" alt="">
    </div>
    <div>
      捋一下整个过程,initComputed() 在initData()之后 <br>
      在vue的created()之前，创建了相应的key的watchers <br>
      在dom渲染时（这个具体时间可能有问题），触发get,这个过程就是依赖收集 <br>
      并调用getter获取新值,更新value <br>
      随后，但凡监听的data或computed值更新，订阅的computed watchers都会触发 <br>
      update(),更新value
    </div>
    <subtitle :subtitle="subtitle3"></subtitle>
    <div>
      相对来说，watch会比computed来得简单些。先贴initWatch() <br>
      他是最后调用的，在initData()和initComputed()之后 <br> 
      他就主要做了一件事，生成user watcher
    </div>
    <div>
      <img src="@/assets/initWatch.png" alt="">
    </div>
    <div>
      这个函数很简单，就是遍历watch对象，拿到属性值handler <br>
      对handler进行解析，也就是如果hanler是数组，则对每个元素调用createWatcher函数 <br>
      这里简单描述下createWatcher函数 <br>
      主要作用就是封装参数，并调用vm.$watch(expOrFn, handler, options)函数 <br>
      那对应对形参就是(key键名=>expOrFn,handler函数=>cb,options对象) <br>
      那otions就是有用户定义的immediate,sync,deep等属性的对象 <br>
      在$watch中会多加一个属性user，这也就是user watcher的由来 <br>
      随后就是调用 new Watcher()
    </div>
    <img src="@/assets/$watch.png" alt="">
    <div>
      后面大致就是watcher的构造函数调用过程，依赖收集,this.cb = handler等等 <br>
      除此外注意几个options的定义即可，尤其是sync，这也是与后面的nextTick相关 <br>
      不妨对各个options自己去理解下.
    </div>
 </div>
</template>
<script>
import MainTitle from '@/components/common/MainViewTitle'
import Subtitle from '@/components/common/Subtitle'
export default {
  name:'computed-watch',
  components: {
    MainTitle,
    Subtitle
  },
  data () {
    return {
      mainTitle: 'computed和watch',
      subtitle1: '异同点',
      subtitle2: 'computed（computed watcher）',
      subtitle3: 'watch (user wacher)'
    }
  }
}
</script>
<style lang="scss" scoped>
$fixedSize: 75%;
div {
  margin: 1rem 0px;
}
img {
  max-width: $fixedSize;
  height: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
