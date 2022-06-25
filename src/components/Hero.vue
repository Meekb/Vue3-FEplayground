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
        <h1 class="title mt-8">FLASHCARDS</h1>
      </div>
      <nav class="flex justify-center items-center">
        <RouterLink to="/" class="router-btn m-1 p-2 rounded-3xl">Home</RouterLink>
        <RouterLink to="/about" class="router-btn m-1 p-2 rounded-3xl">About</RouterLink>
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
  height: 50vh; /* if you don't want it to take up the full screen, reduce this number */
  overflow: hidden;
  background-size: cover !important;
  background: radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 37%, rgba(0,0,0,0.65) 100%), url(qijin-xu.png) no-repeat center center scroll;
}

.hamburger {
  width: 50px;
}

h1 {
  font-style: normal;
  font-weight: bold;
  color: #eee;
  font-size: 11vmin;
  letter-spacing: 0.03em;
  line-height: 1;
  text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.8);
  margin-bottom: 40px;
}
</style>