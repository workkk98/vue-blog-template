<template>
 <div>
   <main-title :mainTitle="mainTitle"></main-title>
   <subtitle :subtitle="subtitle1"></subtitle>
   <div>
     反正刚开始想了解源码的时候，js基础很差，对一些es6的语法还不怎么掌握<br>
     所以但凡你想了解源码，先得对JS非常熟练，了解闭包，了解各种静态方法<br>
     类似Object.defineProperty(),Array的push、pop、splice等等<br>
     然后你可能想看源码了，我建议先去找一些大牛的博客，通过别人的理解先熟<br>
     悉大概一个过程。<br>
     进阶后你可以去github上下载源码，自己一行一行去解读这个过程。
   </div>
   <div>
     <div>
       先贴一张官方的依赖收集图片 "data-touch"，在你阅读完这片小文章后<br>
       希望你能对这张图有个大概对了解,另外建议配合源码食用
     </div>
     <img src="@/assets/data.png" alt="">
   </div>
   <subtitle :subtitle="subtitle2"></subtitle>
   <div>
     首先initData函数，是在initState()中调用的，它在调用是在vue周期是在<br>
     beforeCreate()-created()之间
     它主要干了两件事: <br>
     1.将data对象或是返回的对象中的每个属性挂载到了vue实例上<br>
     2.调用observe()函数，那么这步就是将对象中的每个属性变成了响应式的<br>
   </div>
   <subtitle :subtitle="subtitle3"></subtitle>
   <div>
     事实上，第一步还有这些过程。<br>
     1. 保存data，如果data是函数则调用赋值给data（建议后期仔细看下getData())，如果是对象则直接赋值 <br>
     2. 遍历data中对key，判断每个key都唯一（与props和methods做比较) <br>
     3. 调用proxy(),结果就是读写vue.a,就是读写vm._data.a
   </div>
    <subtitle :subtitle="subtitle4"></subtitle>
    <div>
      将data中的每个属性变为响应式的！！！<br>
      它的核心就是observe()函数，整一个源代码目录中，你可以看到关于observe相关的<br>
      有整整一个文件夹，就可以知道它的重要性了<br>
      observe()函数主要就干了一件事生成一个observe对象，new Observer(value) 这个value=>就是data <br>
      <strong>接下来new Observer()真的很重要，建议多次阅读</strong>
      data后面用value称号，事实上源码也是这么命名的这个形参的<br>
      1.首先是对observer对象的构建 <br>
      { <br>
        value: this.value 也就是为什么你console $data时，会出现无限嵌套 <br>
        dep : new Dep() 这个真的很重要，和$set有关，是手动触发视图更新的关键 <br>
        vmCount : 0 <br>
      } <br>
      最后就是把自身挂载到value上 def(value, '__ob__', this) <br>
      value可数组可对象，主要讲下对象，数组可以自己往下读 <br>
      随后就是调用this.walk(value) <br>
      这个函数很简单，就是遍历每个key，然后调用difineReactive() <br>
      下面就是关键了，注入defineReactive的两个形参先记下一份是obj也就是value，一个是key <br>
      函数第一个语句 就是 <strong>const dep = new Dep()</strong> 你可以看下上面也有个dep，这里先不解释 <br>
      略过一些代码，往下看，就到了Object.difineProperty() <br>
      <img src="@/assets/data_get.png" alt="">
      <div>
        注意这一行代码 let childOb = !shallow && observe(val) <br>
        如果这个key对应的val是个对象，那么childOb就会指向这个val的__ob__ <br>
        先知道这点就行了，等会再来看这里 <br>
        然后就是通过Object.difineProperty()，拦截对这个属性对读写 <br>
        但其实上，但凡有个watcher对象读这个属性watcher.get，就会进入 <br>
        dep.depend这个分支，而且如果这个属性的val是个对象，这个watcher <br>
        还会收入这个对象的observer的dep中，这就是为啥每个observer对象得 <br>
        有个dep，因为165行中的dep你是触碰不到的，但这个dep你是可以手动获取到的 <br>
        这也是$set()的核心 <br>
      </div>
      <img src="@/assets/data_set.png" alt="">
      <div>
        set就相对简单了，但是我们得分情况而定 <br>
        1. newVal 是基础类型，则会释放childOb <br>
        2. newVal 是引用类型，则会重新调用observe(),也就是重新建立响应数据 <br>
      </div>
      <div>
        <strong>打个总结：</strong><br>
        每个属性都有私有的dep <br>
        每个值为对象的属性存有一个__ob__: observe对象，这是为了手动触发视图更新的，observer中的dep是不会变的 <br>
        但每个属性的私有dep是会变的
      </div>
    </div>
 </div>
</template>
<script>
import MainTitle from '@/components/common/MainViewTitle'
import Subtitle from '@/components/common/Subtitle'
export default {
  name: 'init-data',
  components: {
    MainTitle,
    Subtitle
  },
  data () {
    return {
      mainTitle: '简单讲讲initData',
      subtitle1: '推荐学习过程',
      subtitle2: '过程',
      subtitle3: '第一件事',
      subtitle4: '第二件事'
    }
  }
}
</script>
<style lang="scss" scoped>
$fixedSize: 75%;
  img {
    width: $fixedSize;
    height: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
  }
</style>
