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
  <!-- <div class="faq text-lg w-full border-2 border-black text-center m-1 p-3">
    <VToggle :label="question" class="styled" :disabled="this.isOpen">
      <div class="toggle-content">
        <p>{{ answer }}</p>
      </div>
    </VToggle>
  </div> -->

  <div class="faq text-lg w-full border-2 border-black text-center m-1 p-3">
     <VToggle>

      <template #label="{ isOpen }">
        <span>
          {{ isOpen ? "🔼" : "🔽" }}
        </span>
        <p>
          {{ question }}
        </p>
      </template>
      
      <template #default="{ isOpen }">
        <p class="answer border-2 border-black p-4">
          {{ answer }}
        </p>
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
</style>