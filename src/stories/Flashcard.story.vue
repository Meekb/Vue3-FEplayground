<script setup>
import Flashcard from '@/components/Flashcard.vue'
const components = { Flashcard }
</script>>

<template>
  <Story
    title="Flashcard"
    :layout="{ type: 'grid', width: 350 }"
  >
    <Variant title="Default - Empty Card">
      <Flashcard term="" definition="" />
    </Variant>

    <Variant title="Card with Term and Definition">
      <Flashcard term="Bull Hauler" definition="A truck and driver hauling live cattle (not to be confused with a hog hauler)." />
    </Variant>

  </Story>
</template>

<docs lang="md">
# Flashcard Component
  * Flashcard
  * Hover to flip it over

## Components utilized
  * none
</docs>