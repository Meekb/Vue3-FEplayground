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
    <h1 class="text-center text-3xl font-bold">Just In Time!</h1>
    <p class="text-center text-lg m-5">We offer just-in-time service with guaranteed on-time to keep your on-site services operating smoothly. We have dedicated teams on regular routes to ensure we always have your loads in transit for safe and on-time delivery.</p>
  </div>
</template>

<style>

</style>