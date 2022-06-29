<script setup>
import EventButton from '@/components/EventButton.vue'
import { hstEvent } from 'histoire/client';
const emit = defineEmits( 'My Event', 'Click' )
</script>

<template>
  <Story
    title="events/EventButton"
  >
    <!-- EventButton component  -->
    <EventButton @myEvent="hstEvent('My event', $event)" /><br>
    <!-- Plain button element that logs pointer event when clicked -->
    <button @click="hstEvent('Click', $event)" class="test-button">
      Click Me
    </button>
  </Story>
</template>