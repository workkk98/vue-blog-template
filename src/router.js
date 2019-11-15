import Vue from 'vue'
import VueRouter from 'vue-router'
import styleTable from './views/table'

Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path: '/table',
      component: styleTable,
      name: 'styleTable'
    }
  ]
})