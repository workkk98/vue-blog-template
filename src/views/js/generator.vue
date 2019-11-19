<template>
 <div>
  <main-title :mainTitle="mainTitle"></main-title>
  <div>promise十分美丽，但是毫无疑问，链式调用promise仍然不是非常美观。</div>
  <div>generator函数和后面出现的async函数无疑是解决这个问题的好办法</div>
  <subtitle :subtitle="subtitle1"></subtitle>
  <div class="script-style">
    这类函数声明主要和普通函数的区别在于 * 和 yield 关键词 <br>
    例如: <br>
    function* name (params) { <br>
      let a = yield 10; <br>
      let b = yield 20; <br>
      return a <br>
    } <br>
    然后调用这个函数并不会执行函数内的代码，而是返回一个迭代器对象（这一点可以与iterator接口挂钩）<br>
    例如:  <br>
    let iterator = name() <br>  
    console.log(iterator.next()) // 10 <br>
    console.log(iterator.next(15)) // 20 <br>
    console.log(iterator.next()) //可以自己在浏览器控制台打印下 <br>
    然后整个 iterator.next() 返回的对象是这样的 { value: yield右边的值, done: 是否到最后一步} <br>
    <strong>但最关键的是，Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的</strong> <br>
  </div>
  <subtitle :subtitle="subtitle2"></subtitle>
  <div class="script-style">
    稍微复习下iterator接口，这个指的是一种规格。<br>
    应用于for...of循环，以及...扩展运算符和Array.from()函数 <br>
    1.具体要求就是对象中拥有[Symbol.iterator]这个Symbol属性,调用后返回遍历器对象<br>
    2.并每次调用对象中的next方法，返回的格式是{ value: 'something' , done: boolean } <br>
    看到这里，我想你回上方一看这与generator函数的遍历器太相似了
    所以你不妨，可以声明个generator函数，用来使用这些api <br>
    另外值得一提的是 generator()返回的遍历器对象，调用[Symbol.iterator]()后返回的是他本身
  </div>
    <subtitle :subtitle="subtitle3"></subtitle>
    <div class="script-style">
      关于这个，我把async函数称之为自动调用的generator函数<br>
      具体编译原理: <br>
      function spwan(genF) { <br>
        return new Promise(function (resolve,reject) { <br>
          let iterator = genF()  //这个是遍历器对象 <br>
          step()
          function step(data) { <br>
            let item <br>
            try { <br>
              item = iterator.next(data) <br>
            } catch(error) { <br>
              reject(error)     //注意这里的reject是最外层的promise的参数 <br>
            } <br>
            if( item.done === true) { <br>
              resolve(item.value) //注意这里的resolve是最外层的promise的参数
            } <br>
            Promise.resolve(item.value).then(function (data) { <br>
              step(data) <br>
            },function (error) { <br>
              reject(error)     //注意这里的reject是最外层的promise的参数 <br>
            }) <br>
          } <br>
        }) <br>
      } <br>
    </div>
    <div>这个函数放着，我相信绝大多数人放弃治疗了，所以后面建设也得把代码提词器放进来</div>
 </div>
</template>
<script>
import MainTitle from '../../components/common/MainViewTitle'
import Subtitle from '../../components/common/Subtitle'
export default {
  name:'js-generator',
  data () {
    return {
      mainTitle: 'generator',
      subtitle1: '简单介绍',
      subtitle2: '与iterator接口',
      subtitle3: '与async函数的关联'
    }
  },
  components:{
    MainTitle: MainTitle,
    Subtitle: Subtitle
  }
}
</script>
<style scoped>
  div {
    margin-bottom: 0.5rem;
  }
  .script-style {
    line-height: 2rem;
  }
</style>

