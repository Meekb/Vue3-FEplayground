<script setup>
import { onMounted, ref } from 'vue'
import Hero from '@/components/Hero.vue'
import Flashcard from '@/components/Flashcard.vue'
import EventButton from '@/components/EventButton.vue'
import TextMotion from '@/components/TextMotion.vue'
import flashcardData from '@/assets/terms.json'
const components = { Hero, Flashcard, EventButton, TextMotion }
const terms = ref([])
onMounted(() => {
  terms.value = flashcardData.data.terms
})
function eventButtonTest(payload) {
  console.log(payload.a + ' ', payload.b + '!')
  return 0
}
</script>>

<template>
  <div id="wrapper">
    <Hero id="header" hero-image-src="src/assets/arrow-down-angle-svgrepo-com.svg" />
    <main id="content">
      <!-- Flashcards of trucking terms -->
      <section>
        <h2 class="text-2xl text-center mt-10 font-bold">Trucking Terms</h2>
        <h3 class="text-xl text-center mb-10">Hover over a card to flip it</h3>
        <div class="grid-container flex justify-center items-center">
          <div class="container">
            <Flashcard
              v-for="item in terms" :key="item"
              :term="item.term"
              :definition="item.definition"
              class="card"
            />
          </div>
        </div>
        <div class="test-histoire">
          <TextMotion>
            <p><strong>Diesel Particulate Filter</strong> the aluminum hauler. Steel empty <strong>cargo van</strong> was fixed by the wheelbase. The semi truck by backhaul dispatch. Forklift turbo bill of lading.</p>
          </TextMotion>
          <div class="event-button p-5">
            <EventButton @myEvent="eventButtonTest" />
          </div>
        </div>
      </section>
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
  justify-content: center;
}

@media (max-width: 1024px) {
  .container {
    display: grid;
    grid-template: 'service service service';
    justify-content: center;
  }
}

@media (max-width: 900px) {
  .container {
    display: grid;
    grid-template: 'service service service';
    justify-content: center;
  }
}

@media (max-width: 768px) {
  .container {
    display: grid;
    grid-template: 'service service';
    justify-content: center;
  }
}

@media screen and (max-width: 480px) {
 .container {
    display: grid;
    grid-template: 'service';
    justify-content: center;
  }
}
</style>

<!-- w-full grid grid-cols-4 p-1 gap-y-1 gap-x-1 -->