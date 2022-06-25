<script>
import Menu from '@/components/Menu.vue'
export default {
  components: { Menu }
}
</script>

<template>
  <div class="about flex flex-col">
    <div class="w-full flex justify-start bg-gray-400">
      <Menu />
    </div>
    <h1 class="text-center text-3xl font-bold">This is an about page</h1>
    <p class="text-center text-lg m-5">Here is some exciting stuff and things...</p>
  </div>
</template>

<style>

</style>
