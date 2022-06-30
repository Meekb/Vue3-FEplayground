<script>
import { VImg } from 'vuetensils/src/components'
export default {
  name: 'Service',
  components: { VImg },
  props: {
    serviceName: {
      type: String,
    },
    serviceImg: {
      type: String,
    },
    imageAlt: {
      type: String,
    },
    serviceDesc: {
      type: String,
    },
    routeTo: {
      type: String,
    }
  },
}
</script>>

<template>
  <RouterLink class="to" :to="`${routeTo}`">
    <article class="services w-96">
      <div class="service-container flex flex-col text-center">
        <div class="service">
          <div class="service-name">
            <h3 class="service-title font-bold text-xl p-2">
              {{ serviceName }}
            </h3>
          </div>
          <VImg
            :src="`${serviceImg}`"
            :alt="`${imageAlt}`"
            placeholder="http://placehold.jp/200x200.png"
            class="service-image"
          />
          <p class="service-desc text-justify p-3 text-lg font-bold">
            {{ serviceDesc }}
          </p>
        </div>
      </div>
    </article>
  </RouterLink>
</template>

<style scoped>

.services {
  background-color: #9BA3AF;
  color: white;
}
.service-name {
  background-color: #9D012A;
}
.services:hover {
  border: 3px solid #9D012A;
  transform: scale(1, 1);
}
.service-image {
  width: 200px;
  height: 300px;
  object-fit: contain;
}
</style>
