import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views'
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