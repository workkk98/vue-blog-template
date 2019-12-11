<template>
  <div id="app">
    <div :class="{ 'project-container-mobile': isMobile}">
      <div class="drawer-bg" @click="openOrCloseLeft" v-if="isMobile&&defaultStatusInDevice"></div>
      <aside>
        <transition name="left">
          <div :class="{ 'left': !isMobile, 'left-in-mobile': isMobile}" v-if="defaultStatusInDevice">
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
  width: 100%;
  .right {
    width: 100%;
    margin-left: 0px;
    padding: 2rem 2rem;
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
  background: #FFF;
}
.left-in-mobile {
  position: fixed;
  box-sizing: border-box;
  width: 230px;
  padding: 2px;
  border-right: 1px solid #eaecef;
  max-height: 100vh;
  overflow-y: auto;
  background: #FFF;
  z-index: 1200;
}
.right {
  overflow: auto;
  margin-left: 20rem;
  width: auto;
  padding: 2rem 6rem;
  box-sizing: border-box;
}
.drawer-bg {
  position: absolute;
  z-index: 999;
  height: 100%;
  width: 100%;
  background: #000;
  opacity: 0.3;
}
.left-enter,.left-leave-to {
  width: 0px;
}
.left-enter-active,.left-leave-active {
  transition: width .28s;
}
</style>
