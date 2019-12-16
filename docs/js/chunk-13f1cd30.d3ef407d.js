(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-13f1cd30"],{"0632":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h3",[e._v(e._s(e.subtitle))])])},i=[],a={name:"subtitle",props:["subtitle"]},o=a,s=n("2877"),c=Object(s["a"])(o,r,i,!1,null,"45a9ab29",null);t["a"]=c.exports},"100c":function(e,t,n){"use strict";var r=n("416f"),i=n.n(r);i.a},3655:function(e,t,n){},"416f":function(e,t,n){},"5adf":function(e,t,n){"use strict";var r=n("e6ae"),i=n.n(r);i.a},b1bf:function(e,t,n){"use strict";var r=n("3655"),i=n.n(r);i.a},e6ae:function(e,t,n){},ed08:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"main-title"},[n("h1",[e._v(e._s(e.mainTitle))])])},i=[],a={name:"main-view-title",props:["mainTitle"]},o=a,s=(n("100c"),n("2877")),c=Object(s["a"])(o,r,i,!1,null,"2b84df55",null);t["a"]=c.exports},f658:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("main-title",{attrs:{mainTitle:e.mainTitle}}),n("div",[e._v("promise十分美丽，但是毫无疑问，链式调用promise仍然不是非常美观。")]),n("div",[e._v("generator函数和后面出现的async函数无疑是解决这个问题的好办法")]),n("subtitle",{attrs:{subtitle:e.subtitle1}}),n("div",{staticClass:"script-style"},[e._v(" 这类函数声明主要和普通函数的区别在于 * 和 yield 关键词 "),n("br"),e._v(" 例如: "),n("br"),n("code-box",{attrs:{code:e.code1}}),e._v(" 然后调用这个函数并不会执行函数内的代码，而是返回一个迭代器对象（这一点可以与iterator接口挂钩）"),n("br"),e._v(" 例如: "),n("br"),n("code-box",{attrs:{code:e.code2}})],1),n("subtitle",{attrs:{subtitle:e.subtitle2}}),e._m(0),n("subtitle",{attrs:{subtitle:e.subtitle3}}),n("div",{staticClass:"script-style"},[e._v(" 关于这个，我把async函数称之为自动调用的generator函数"),n("br"),e._v(" 具体编译原理: "),n("br"),n("code-box",{attrs:{code:e.code3}})],1),n("div",[e._v("这个函数放着，我相信绝大多数人放弃治疗了，所以后面建设也得把代码高亮放进来")])],1)},i=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"script-style"},[e._v(" 稍微复习下iterator接口，这个指的是一种规格。"),n("br"),e._v(" 应用于for...of循环，以及...扩展运算符和Array.from()函数 "),n("br"),e._v(" 1.具体要求就是对象中拥有[Symbol.iterator]这个Symbol属性,调用后返回遍历器对象"),n("br"),e._v(" 2.并每次调用对象中的next方法，返回的格式是{ value: 'something' , done: boolean } "),n("br"),e._v(" 看到这里，我想你回上方一看这与generator函数的遍历器太相似了 所以你不妨，可以声明个generator函数，用来使用这些api "),n("br"),e._v(" 另外值得一提的是 generator()返回的遍历器对象，调用[Symbol.iterator]()后返回的是他本身 ")])}],a=n("ed08"),o=n("0632"),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("pre",{staticClass:"code-container"},[e._v("     "),n("code",[e._v("\n "+e._s(e.code)+"\n     ")]),e._v("\n ")])])},c=[],l={name:"code-box",props:["code"]},u=l,d=(n("b1bf"),n("2877")),v=Object(d["a"])(u,s,c,!1,null,"17a764e2",null),b=v.exports,f={name:"js-generator",data:function(){return{mainTitle:"generator",subtitle1:"简单介绍",subtitle2:"与iterator接口",subtitle3:"与async函数的关联",code1:"function* name (params) { \n  let a = yield 10; \n  let b = yield 20; \n  return a \n } ",code2:"let iterator = name() \n console.log(iterator.next()) // 10 \n console.log(iterator.next(15)) // 20 \n console.log(iterator.next()) //可以自己在浏览器控制台打印下\n 然后整个 iterator.next() 返回的对象是这样的 { value: yield右边的值, done: 是否到最后一步} \n 但最关键的是，Generator 函数从暂停状态到恢复运行，它的上下文状态（context）是不变的",code3:"function spwan(genF) { \n   return new Promise(function (resolve,reject) { \n   let iterator = genF()  //这个是遍历器对象 \n     step()\n     function step(data) {\n       let item\n       try {\n         item = iterator.next(data)\n       } catch(error) {\n          reject(error)     //注意这里的reject是最外层的promise的参数\n       } \n       if( item.done === true) {\n          resolve(item.value) //注意这里的resolve是最外层的promise的参数\n        } <br>\n        Promise.resolve(item.value).then(function (data) {\n           step(data)\n        },function (error) {\n           reject(error)     //注意这里的reject是最外层的promise的参数\n        })\n     }\n    })\n   } \n}"}},components:{MainTitle:a["a"],Subtitle:o["a"],CodeBox:b}},m=f,_=(n("5adf"),Object(d["a"])(m,r,i,!1,null,"70f6ad2f",null));t["default"]=_.exports}}]);
//# sourceMappingURL=chunk-13f1cd30.d3ef407d.js.map