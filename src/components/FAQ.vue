<script setup>
import { VToggle } from 'vuetensils/src/components'
const components = { VToggle }
const name = 'FAQ'
const props = defineProps(
  {
    question: String,
    answer: String,
  }
)

</script>

<template>
  <div class="faq text-lg text-white font-bold w-full text-center">
    <VToggle class="border border-gray-400">

      <template #label="{ isOpen }">
        <span class="text-3xl">
          {{ isOpen ? "^" : "&#8964;" }}
        </span>
        <p class="pb-3">
          {{ question }}
        </p>
      </template>
      
      <template #default="{ isOpen }">
        <div>
          <p class="answer p-4 bg-white text-black">
            {{ answer }}
          </p>
        </div>
      </template>
    </VToggle>
  </div>
</template>

<style scoped>
.vts-toggle__button {
  display: block;
  width: 100%;
  border: 0;
  padding: 5px;
}

.toggle-content {
  display: flex;
  justify-content: center;
  align-content: center;
  border: 1px solid #CCC;
  padding: 5px;
}

.faq {
  background-color: #9D012A;
}
</style>