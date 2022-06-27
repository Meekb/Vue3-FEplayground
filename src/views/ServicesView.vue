<script>
import Menu from '@/components/Menu.vue'
import Service from '@/components/Service.vue'
export default {
  components: { Menu, Service },
  data() {
    return {
      services: [
        {
          serviceName: 'JIT',
          serviceImg: 'src/assets/jit.jpeg',
          imageAlt: 'Team drivers',
          serviceDesc: 'Just in time deliveries guaranteed to meet the need of your on-site operations. We have dedicated teams on regular routes to ensure that we always have your load in transit for safe and on time delivery.',
          routeTo: '/services/just-in-time'
        },
        {
          serviceName: 'Heavy Haul & Flatbed',
          serviceImg: 'src/assets/heavy-haul.jpg',
          imageAlt: 'Heavy Haul flatbed',
          serviceDesc: 'Special equipment to meet your needs including flatbed and heavy haul.',
          routeTo: '/services/special-equipment'
        },
        // {
        //   serviceName: 'Reefer',
        //   serviceImg: 'src/assets/unload.jpg',
        //   imageAlt: 'Refrigerated',
        //   serviceDesc: 'Timely refrigerated deliveries with over 3000 reefer trailers.'
        // },
        // {
        //   serviceName: 'Intermodal & Port Services',
        //   serviceImg: 'src/assets/container.jpg',
        //   imageAlt: 'Intermodal',
        //   serviceDesc: 'Twelve fleet divisons with TWIC® cards to service our nations ports.'
        // }
      ]
    }
  },
}
</script>

<template>
  <div class="about flex flex-col">
    <div class="w-full flex justify-start bg-gray-400">
      <Menu />
    </div>
    <h1 class="text-center text-3xl font-bold">Our Services</h1>
    <p class="text-center text-lg m-5">Here are our services....</p>
    <div class="service-area flex justify-evenly">
      <Service 
        v-for="(service, i) in services"
        :key="i"
        :route-to="service.routeTo"
        :service-name="service.serviceName"
        :service-img="service.serviceImg"
        :image-alt="service.imageAlt"
        :service-desc="service.serviceDesc"
      />
    </div>
  </div>
</template>

<style>

</style>