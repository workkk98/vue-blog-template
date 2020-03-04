import Vue from 'vue'
import VueRouter from 'vue-router'
import store from './store/index'
const index = () => import(/* webpackChunkName: "group-views" */ './views')
const generatorView = () => import(/* webpackChunkName: "group-views" */ './views/js/generator')
const styleTable = () => import(/* webpackChunkName: "group-views" */ './views/components/table')
const layoutCom = () => import(/* webpackChunkName: "group-views" */ './views/components/layout')
const initDataView = () => import(/* webpackChunkName: "group-views" */ './views/vue/InitData')
const ComputedWatchView = () => import(/* webpackChunkName: "group-views" */ './views/vue/ComputedWatch')
const VueRouterView = () => import(/* webpackChunkName: "group-views" */ './views/vue/VueRouter')
const MarkdownView = () => import(/* webpackChunkName: "group-views" */ './views/components/markdown')

Vue.use(VueRouter)

const router = new VueRouter({
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
    {
      path: '/vue/vue-router',
      component: VueRouterView
    },
    // components相关
    {
      path: '/components/layout',
      component: layoutCom
    },
    {
      path: '/components/table',
      component: styleTable,
      name: 'styleTable'
    },
    {
      path: '/components/markdown',
      component: MarkdownView
    }
  ]
})

router.beforeEach((to, from, next) => {
  console.log(store)
  next()
})

export default router
