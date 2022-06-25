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
      <div class="flex justify-center items-center">
        <div class="container w-full grid grid-cols-4 p-1 gap-y-1 gap-x-1">
          <Card
            v-for="item in terms" :key="item"
            :term="item.term"
            :definition="item.definition"
          />
        </div>
      </div>
    </main>

  </div>
</template>

<style scoped>
@media screen and (max-width: 780px) {
  .container {
    grid-auto-flow: column;
  }
}
</style>

