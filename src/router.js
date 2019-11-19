import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views'
import generatorView from './views/js/generator'
import styleTable from './views/components/table'
import layoutCom from  './views/components/layout'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/',
      component: index,
      alias: '/index'
    },
    //js相关
    {
      path: '/js/generator',
      component: generatorView
    },
    //components相关
    {
      path: '/components/layout',
      component: layoutCom
    },
    {
      path: '/table',
      component: styleTable,
      name: 'styleTable'
    }
  ]
})