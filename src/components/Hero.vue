<script>
import Menu from '@/components/Menu.vue'
export default {
  components: { Menu },
}
</script>>


<template>
  <section class="masthead" ariarole="Landmark" aria-label="Image Description">
    <div class="wrapper w-full h-full flex flex-col">
      <div class="w-full mt-3 mx-3 flex justify-start">
        <Menu />
      </div>
      <div class="title-container text-4xl w-full text-center">
        <h1 class="mt-64 text-red-500">FLASHCARDS</h1>
      </div>
      <nav class="flex justify-center items-center">
        <img src="src/assets/arrow-down-angle-svgrepo-com.svg" alt="arrow-down for main content" :style="{ width: '100px', marginTop: '150px' }"/>
      </nav>
    </div>
  </section>
</template>

<style scoped>
.masthead {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  width: 100%;
  height: 100vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 24%, rgba(119,14,14,0.65) 100%), url(qijin-xu.png) no-repeat center center scroll;
}

.hamburger {
  width: 50px;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #8B0226;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 2px 4px 8px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}
</style>