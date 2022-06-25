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
  background: #B10021;
  color: white;
}
.title {
  color: #B10021;
  font-size: 45px;
  font-weight: bolder;
}
#wrapper {width:95%;  margin: 0 auto; }
#header {width:100%; }
#content {width:100%; }
</style>


