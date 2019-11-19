<template>
 <div class="main-title">
   <h1>{{mainTitle}}</h1>
 </div>
</template>
<script>
export default {
  name:'main-view-title',
  props:['mainTitle']
}
</script>
<style scoped>
  .main-title {
    border-bottom: 1px solid #eaecef;
    margin-bottom: 3rem;
  }
</style>
