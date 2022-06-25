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
    flipCard() {
      this.cardFlipped = !this.cardFlipped
    },
  }
}
</script>

<template>
  <article class="flip-card m-2">
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <h3 class="mt-20 text-xl font-bold">{{ term }}</h3>
        </div>
        <div class="flip-card-back">
          <p class="ml-2 text-left">{{ definition }}</p>
        </div>
      </div>
    </div>
  </article>
</template>

<style scoped>
.flip-card {
  background-color: transparent;
  width: 300px;
  height: 200px;
  perspective: 1000px; /* Creates the flipping 3D effect / optional */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.flip-card-front {
  background-color:#8B0226;
  color: whitesmoke;
}

/* Style the back side */
.flip-card-back {
  background-color: gray;
  color: white;
  transform: rotateY(180deg);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5px;
}
</style>

