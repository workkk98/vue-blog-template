import Vue from 'vue'
import VueRouter from 'vue-router'
import index from './views'
import generatorView from './views/js/generator'
import styleTable from './views/components/table'
import layoutCom from './views/components/layout'
import initDataView from './views/vue/InitData'
import ComputedWatchView from './views/vue/ComputedWatch'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: index,
      alias: '/index'
    },
    // js相关
    {
      path: '/js/generator',
      component: generatorView
    },
    // vu相关
    {
      path: '/vue/initData',
      component: initDataView
    },
    {
      path: '/vue/computedwatch',
      component: ComputedWatchView
    },
    // components相关
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
