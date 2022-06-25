<script>
import { VDrawer } from 'vuetensils/src/components'
import MenuLinks from '@/components/MenuLinks.vue'
export default {
  name: 'Menu',
  components: { VDrawer, MenuLinks },
}
</script>


<template>
  <VDrawer
    no-scroll
    transition="slide-right"
    bg-transition="fade"
  >
    <template #toggle="{ bind, on }">
      <button v-bind="bind" v-on="on" class="menu">
        <div class="p-2 rounded-full hover:bg-sky-100 hover:opacity-20">
          <img
            src="./icons/hamburger-menu-svgrepo-com.svg"
            alt="hamburger-menu"
            class="hamburger hover:opacity-90"
          />
        </div>
      </button>
    </template>


    <template #default="{ close }">
        <div>
          
          <div class="flex justify-end text-2xl">
            <button @click="close">
              &#10005;
            </button>
          </div>

          <br />

          <div class="flex flex-col justify-center items-center">
            <MenuLinks />
          </div>

        </div>
    </template>

  </VDrawer>
</template>

<style>
.vts-drawer__content {
  padding: 20px;
  color: #FFF;
  background: #9D012A;
  transition: 0.3s ease transform;
}

.hamburger {
  width: 50px;
}

.link-list {
  font-size: 18px;
  color: #D9D9D9; 
}

.slide-right-enter-active,
.slide-right-leave {
  transition: opacity 0.5s ease, transform 0.5s ease;
}

.slide-right-enter-active,
.slide-right-leave-to-active {
  opacity: 0;
  transform: translateX(-100%);
}

  /* .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  
  .fade-enter,
  .fade-leave-to {
    opacity: 0;
  } */
</style>