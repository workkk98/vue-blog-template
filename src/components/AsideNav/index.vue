<template>
  <div class="nav-container">
    <nav-bar v-for="(item,index) of navList" :key="index" :navData="item"></nav-bar>
  </div>
</template>

<script>
// todo: 解决组件问题
import NavBar from './NavBar'
import navList from '../../config/navList'
export default {
  name: 'aside-nav',
  components: {
    NavBar: NavBar
  },
  data () {
    return {
      navList: navList
    }
  }
}
</script>

<style scoped>
  .nav-container {
    width: 200px;
    height: 100vh;
  }
  .nav-box {
    margin-bottom: 2rem;
  }
</style>
