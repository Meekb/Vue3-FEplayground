<script>
export default {
  name: 'Card',
  props: {
    term: {
      type: String
    },
    definition: {
      type: String
    }
  },
  data() {
    return {
      cardFlipped: false,
    }
  },
  methods: {
    flipCard(card) {
      this.card.cardFlipped = !this.card.cardFlipped
    },
  }
}
</script>

<template>
  <article class="info-card flex flex-row flex-wrap my-1">
    <div class="card-container bg-rose-200 w-80 p-3">
      <div class="card-top">
        <h3 class="text-lg font-bold">{{ term }}</h3>
      </div>
      <br>
      <VBtn v-if="!cardFlipped" @click="flipCard">
        Show Definition
      </VBtn>
      <VBtn v-if="cardFlipped" @click="flipCard">
        Hide Definition
      </VBtn>
      <div v-show="cardFlipped" class="card-middle">
        <p>
          {{ definition }}
        </p>
      </div>
      <br>
    </div>
  </article>
</template>

