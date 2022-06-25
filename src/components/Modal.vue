<script>
import { VDialog } from 'vuetensils/src/components'
export default {
  name: 'Modal',
  components: { VDialog },
}
</script>

<template>
  <VDialog
    bg-transition="fade"
    class="my-dialog"
    @change="log"
  >
    <template #toggle="{ bind, on }">
      <button v-bind="bind" v-on="on">
        Show the dialog
      </button>
    </template>

    <template #default="{ close }">
      This is the dialog content.<br />
      It traps the user's focus.<br />
      <button
        aria-label="close"
        class="my-dialog__close"
        @click="close"
      >
        &times;
      </button>
    </template>
  </VDialog>
</template>