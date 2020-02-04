<template>
  <a :href="link" target="_blank">传送门</a>
</template>
<script>
export default {
  name: 'a-link',
  props: ['link']
}
</script>
<style scoped>
a:link {
  text-decoration: none;
  color: #2c3e50;
}
a:visited {
  text-decoration: none;
  color: #2c3e50;
}
a:hover {
  text-decoration: none;
}
a:active {
  text-decoration: none;
}
</style>
