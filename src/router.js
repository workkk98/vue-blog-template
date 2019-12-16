import Vue from 'vue'
import VueRouter from 'vue-router'
const index = () => import(/* webpackChunkName: "group-views" */ './views')
const generatorView = () => import(/* webpackChunkName: "group-views" */ './views/js/generator')
const styleTable = () => import(/* webpackChunkName: "group-views" */ './views/components/table')
const layoutCom = () => import(/* webpackChunkName: "group-views" */ './views/components/layout')
const initDataView = () => import(/* webpackChunkName: "group-views" */ './views/vue/InitData')
const ComputedWatchView = () => import(/* webpackChunkName: "group-views" */ './views/vue/ComputedWatch')

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
