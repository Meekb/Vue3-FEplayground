<script>
import Menu from '@/components/Menu.vue'
// import Service from '@/components/Service.vue'
export default {
  components: { Menu },
}
</script>

<template>
  <div class="jit flex flex-col">
    <div class="w-full flex justify-start bg-gray-400">
      <Menu />
    </div>
    <h1 class="text-center text-3xl font-bold">Refrigerated</h1>
    <p class="text-center text-lg m-5">Sixteen fleets dedicated to time-sensitive refrigerated loads</p>
  </div>
</template>

<style>

</style>
