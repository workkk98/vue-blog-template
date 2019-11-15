<template>
  <div id="app">
    <div class="project-container">
      <aside>
        <div class="left">
          <AsideNav></AsideNav>
        </div>
      </aside>
      <main>
        <div class="right">
          <router-view></router-view>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import AsideNav from './components/AsideNav'
export default {
  name: 'app',
  components: {
    AsideNav: AsideNav
  }
}
</script>

<style>
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
.project-container {
  position: relative;
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
</style>
