<template>
  <div id="app">
    <div :class="{ 'project-container-mobile': isMobile}">
      <aside>
        <transition name="left">
          <div class="left" v-if="defaultStatusInDevice">
            <AsideNav></AsideNav>
          </div>
        </transition>
      </aside>
      <main>
        <div class="right">
          <div @click="openOrCloseLeft" v-if="isMobile">to open left</div>
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AsideNav from './components/AsideNav/index'
import resizeHandler from './mixin/ResizeHandler'
export default {
  name: 'app',
  components: {
    AsideNav: AsideNav
  },
  mixins: [resizeHandler],
  computed: {
    isMobile () {
      return this.$store.state.device.device === 'mobile'
    },
    //  桌面默认显示，移动端默认关闭
    defaultStatusInDevice () {
      if (this.$store.state.device.device === 'desktop') {
        return true
      } else {
        console.log(this.$store.state.device.leftStatus)
        return this.$store.state.device.leftStatus
      }
    }
  },
  methods: {
    openOrCloseLeft () {
      this.$store.dispatch('device/openOrCloseLeft')
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  font-size: 16px;
  margin: 0px;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.project-container-mobile {
  .right {
    width: 100%;
    margin-left: 0px;
  }
}
.left {
  position: fixed;
  box-sizing: border-box;
  width: 20rem;
  padding: 2rem;
  border-right: 1px solid #eaecef;
  max-height: 100vh;
  overflow-y: auto;
}
.right {
  overflow: auto;
  margin-left: 20rem;
  width: auto;
  padding: 2rem 6rem;
}
.left-enter,.left-leave-to {
  width: 0rem;
}
.left-enter-active,.left-leave-active {
  transition: width 0.5s;
}
</style>
