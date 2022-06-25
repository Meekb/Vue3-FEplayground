<script>
import { VBtn } from 'vuetensils/src/components'
export default {
  name: 'MenuLinks',
  components: { VBtn },
  data() {
    return {
      buttonLinks: [
        {
          text: 'Home',
          bind: {
            to: '/'
          }
        },
        {
          text: 'About',
          bind: {
            to: '/about'
          }
        },
        {
          text: 'Services',
          on: {
            click: console.log
          }
        },
        {
          text: 'Test',
          on: {
            click: console.log
          }
        },
      ],
    }
  },
}
</script>

<template>
  <ul>
    <li v-for="item in buttonLinks" :key="item.text" class="text-xl">
      <VBtn v-bind="item.bind" v-on="item.on || {}">
        {{ item.text }}
      </VBtn>
    </li>
  </ul>
</template>
