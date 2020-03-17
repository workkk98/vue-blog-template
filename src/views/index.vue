<template>
  <div class="container">
    <div v-html="markdown"></div>
  </div>
</template>

<script>
import mdRoute from '../markdowns/route'
export default {
  name: 'slog-index',
  data () {
    return {
      markdown: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    // 对于第一次进入该页面的bug修复
    next((vue) => {
      if (vue.markdown === '') {
        mdRoute.getComponent(to.path).then((md) => {
          vue.markdown = md.default
          vue.$nextTick(() => {
            document.querySelectorAll('pre code').forEach((ele) => {
              vue.$hljs.highlightBlock(ele)
            })
          })
        })
      }
    })
  },
  beforeRouteUpdate (to, from, next) {
    mdRoute.getComponent(to.path).then((md) => {
      this.markdown = md.default
      this.$nextTick(() => {
        document.querySelectorAll('pre code').forEach((ele) => {
          this.$hljs.highlightBlock(ele)
        })
      })
    })
    next()
  }
}
</script>

<style scoped>
</style>
