import Vue from 'vue'
import VueRouter from 'vue-router'
import Table from './views/table'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/table',
      component: Table
    }
  ]
})