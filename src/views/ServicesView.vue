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
          serviceImg: 'src/assets/driving-team.jpeg',
          imageAlt: 'Team drivers Chris and Veronica',
          serviceDesc: 'Dedicated teams mean we always have your load moving on time.',
          routeTo: '/services/just-in-time'
        },
        {
          serviceName: 'Heavy Haul & Flatbed',
          serviceImg: 'src/assets/heavy-haul.jpg',
          imageAlt: 'Heavy Haul & Flatbed',
          serviceDesc: 'Special equipment to meet your needs including flatbed and heavy haul.',
          routeTo: '/services/special-equipment'
        },
        {
          serviceName: 'Reefer',
          serviceImg: 'src/assets/reefer.jpg',
          imageAlt: 'Refrigerated trailers in a dock',
          serviceDesc: 'Timely refrigerated deliveries with over 3000 reefer trailers.',
          routeTo: '/services/reefer'
        },
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
    <h3 class="text-center text-3xl font-bold">Our Services</h3>
    <p class="text-center text-lg m-5">Here are our services....</p>
    <nav class="service-area flex justify-evenly">
      <Service 
        v-for="(service, i) in services"
        :key="i"
        :route-to="service.routeTo"
        :service-name="service.serviceName"
        :service-img="service.serviceImg"
        :image-alt="service.imageAlt"
        :service-desc="service.serviceDesc"
      />
    </nav>
  </div>
</template>

<style>

</style>