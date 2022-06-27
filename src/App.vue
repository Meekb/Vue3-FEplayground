<script setup>
import { RouterLink, RouterView } from 'vue-router'
const components = { RouterLink, RouterView }
</script>

<template>
  <div id="wrapper">
    <RouterView />
  </div>
</template>

<style>
body {
  min-height: 100vh;
}
header {
  background: #D9D9D9;
}
.router-btn {
  background: #8B0226;
  color: white;
}
</style>


