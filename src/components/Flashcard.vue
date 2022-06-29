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
  perspective: 1000px; /* Creates the flip effect */
}

@media (max-width: 754px) {
  .flip-card {
    width: 300px;
    height: 200px;
  }
}

@media (max-width: 768px) {
  .flip-card {
    width: 320px;
    height: 200px;
  }
}

@media (max-width: 480px) {
  .flip-card {
    width: 400px;
    height: 200px;
  }
}

/* Positions the front and back side of the card */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Horizontal flip with mouseover */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

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

