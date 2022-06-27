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
      <h2 class="text-2xl text-center mt-10">Trucking Terms</h2>
      <h3 class="text-xl text-center mb-10">Hover over a card to flip it</h3>
      <div class="grid-container flex justify-center items-center">
        <div class="container">
          <Card
            v-for="item in terms" :key="item"
            :term="item.term"
            :definition="item.definition"
            class="card"
          />
        </div>
      </div>
    </main>

  </div>
</template>

<style scoped>
.card {
  grid-area: 'service';
}
.container {
  display: grid;
  grid-template: 'service service service service';
}
@media (max-width: 800px) {
  .container {
    display: grid;
    grid-template: 'service service service';
  }
}
@media screen and (max-width: 700px) {

}
@media screen and (max-width: 700px) {
  .grid-container {
    /* border: 2px solid blue;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center; */
  }
  .card {
    /* grid-area: 'service' */
  }
  .container {
    /* display: grid; */
    /* grid-template: 'service'; */
  }
}
</style>

<!-- w-full grid grid-cols-4 p-1 gap-y-1 gap-x-1 -->