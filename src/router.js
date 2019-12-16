import Vue from 'vue'
import VueRouter from 'vue-router'
const index = () => import('./views')
const generatorView = () => import('./views/js/generator')
const styleTable = () => import('./views/components/table')
const layoutCom = () => import('./views/components/layout')
const initDataView = () => import('./views/vue/InitData')
const ComputedWatchView = () => import('./views/vue/ComputedWatch')

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
