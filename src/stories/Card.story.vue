<script setup>
import Card from '@/components/Card.vue'
const components = { Card }
</script>>

<template>
  <Story
    title="Flashcard"
    :layout="{ type: 'grid', width: 350 }"
  >
    <Variant title="Default - Empty Card">
      <Card term="" definition="" />
    </Variant>

    <Variant title="Card with Term and Definition">
      <Card term="Bull Hauler" definition="A truck and driver hauling live cattle (not to be confused with a hog hauler)." />
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