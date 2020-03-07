import Vue from 'vue'
import VueRouter from 'vue-router'
// import store from './store/index'
const index = () => import(/* webpackChunkName: "group-views" */ './views')

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '*',
      component: index
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === from.path) {
    next(false)
  } else {
    next()
  }
})

export default router
