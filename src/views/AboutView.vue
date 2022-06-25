<script>
import Menu from '@/components/Menu.vue'
export default {
  components: { Menu }
}
</script>

<template>
  <div class="about flex flex-col justify-center items-center m-10">
    <div class="w-full flex justify-start">
      <Menu />
    </div>
    <h1>This is an about page</h1>
    <VBtn to="/" class="bg-blue-500 p-2 rounded-full font-bold m-10">Home</VBtn>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  /* .about {
    min-height: 100vh;
  } */
}
</style>
