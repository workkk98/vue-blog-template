<template>
 <div>
  <main-title :mainTitle="mainTitle"></main-title>
  <div>promise十分美丽，但是毫无疑问，链式调用promise仍然不是非常美观。</div>
  <div>generator函数和后面出现的async函数无疑是解决这个问题的好办法</div>
  <subtitle :subtitle="subtitle1"></subtitle>
  <div class="script-style">
    这类函数声明主要和普通函数的区别在于 * 和 yield 关键词 <br>
    例如: <br>
    <code-box :code="code1"></code-box> 
    然后调用这个函数并不会执行函数内的代码，而是返回一个迭代器对象（这一点可以与iterator接口挂钩）<br>
    例如:  <br>
    <code-box :code="code2"></code-box> 
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
      <code-box :code="code3"></code-box>
    </div>
    <div>这个函数放着，我相信绝大多数人放弃治疗了，所以后面建设也得把代码高亮放进来</div>
 </div>
</template>
<script>
import MainTitle from '../../components/common/MainViewTitle'
import Subtitle from '../../components/common/Subtitle'
import CodeBox from '../../components/common/CodeBox'
export default {
  name:'js-generator',
  data () {
    return {
      mainTitle: 'generator',
      subtitle1: '简单介绍',
      subtitle2: '与iterator接口',
      subtitle3: '与async函数的关联',
      code1: 'function* name (params) { \n' +
      '  let a = yield 10; \n ' +
      ' let b = yield 20; \n ' +
      ' return a \n ' +
      '} ',
      code2: 'let iterator = name() \n console.log(iterator.next()) // 10 \n ' + 
      'console.log(iterator.next(15)) // 20 \n console.log(iterator.next()) //可以自己在浏览器控制台打印下\n ' +
      '然后整个 iterator.next() 返回的对象是这样的 { value: yield右边的值, done: 是否到最后一步} \n' +
      ' 但最关键的是，Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的',
      code3: 'function spwan(genF) { \n' +
        '   return new Promise(function (resolve,reject) { \n' +
        '   let iterator = genF()  //这个是遍历器对象 \n' +
        '     step()\n' +
        '     function step(data) {\n' +
        '       let item\n' +
        '       try {\n' +
        '         item = iterator.next(data)\n' +
        '       } catch(error) {\n' +
        '          reject(error)     //注意这里的reject是最外层的promise的参数\n' +
        '       } \n' +
        '       if( item.done === true) {\n' +
        '          resolve(item.value) //注意这里的resolve是最外层的promise的参数\n' +
        '        } <br>\n' +
        '        Promise.resolve(item.value).then(function (data) {\n' +
        '           step(data)\n' +
        '        },function (error) {\n' +
        '           reject(error)     //注意这里的reject是最外层的promise的参数\n' +
        '        })\n' +
        '     }\n' +
        '    })\n' +
        '   } \n' +
        '}'
    }
  },
  components:{
    MainTitle: MainTitle,
    Subtitle: Subtitle,
    CodeBox
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

