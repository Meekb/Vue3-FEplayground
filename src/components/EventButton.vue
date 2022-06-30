<script>
const a = 'Hello'
const b = 'World'
export default {
  name: 'EventButton',
  emits: [ 'myEvent' ],
  methods: {
    sendEvent() {
      this.$emit('myEvent', { a, b })
    },
  } 
}
</script>

<template>
  <input
    v-model="value1"
    type="text"
  >
  <input
    v-model="value2"
    type="text"
  >
  <button @click="sendEvent">
    Send
  </button>
</template>

