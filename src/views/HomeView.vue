<script>
import Hero from '@/components/Hero.vue'
import Card from '@/components/Card.vue'
import terms from '@/assets/terms.json'
export default {
  components: { Hero, Card },
  data() {
   return  {
      terms: [],
    }
  },
  created() {
    this.terms = terms.data.terms
  },
}
</script>>

<template>
  <div id="wrapper">
    <Hero id="header" />
    <main id="content">
      <h2 class="text-2xl text-center mt-10 mb-10">Hello and Welcome</h2>
      <div class="container w-full grid grid-cols-4 mx-5 p-1 gap-y-1 gap-x-1">
        <Card
          v-for="item in terms" :key="item"
          :term="item.term"
          :definition="item.definition"
        />
      </div>
    </main>

  </div>
</template>

<style scoped>
@media screen and (min-width: 768px) {
  .container {
    grid-template-columns: auto;
  }
}
@media screen and (min-width: 768px) {
  .container {
    grid-template-columns: auto;
  }
}

#wrapper {width:95%;  margin: 0 auto; }

#header {width:100%; }

#content {width:100%; }

/* #sidebar {width:100%; } */

/* #footer {width:100%; } */

/* // Small devices (landscape phones, 576px and up) */

@media (min-width: 576px) {

/* // Medium devices (tablets, 768px and up) */

@media (min-width: 768px) {

#wrapper {width:90%;  margin: 0 auto; }

#content {width:70%; float:left; }

/* #sidebar {width:30%; float:right; } */

/* // Large devices (desktops, 992px and up) */

@media (min-width: 992px) {}

}

/* // Extra large devices (large desktops, 1200px and up) */

@media (min-width: 1200px) {

#wrapper {width:90%;  margin: 0 auto; }

}



</style>

