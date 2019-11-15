<template>
  <div class="nav-container">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'aside-nav',
  components: {
    NavBar: NavBar
  }
}
</script>

<style scoped>
  .nav-container {
    height: 100vh;
  }
  .nav-box {
    margin-bottom: 2rem;
  }
</style>