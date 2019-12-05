<template>
 <div>
    <pre class="code-container">
      <code>
  {{code}}
      </code>
  </pre>
 </div>
</template>
<script>
export default {
  name: 'code-box',
  props: ['code']
}
</script>
<style scoped>
 .code-container {
   background-color: #282c34;
   border-radius: 5px;
 }
 code {
   color: white;
 }
</style>
