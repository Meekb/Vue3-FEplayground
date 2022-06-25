import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { VBtn, VDrawer } from 'vuetensils/src/components'
import './index.css'

const app = createApp(App)
app.component('VBtn', VBtn, 'VDrawer', VDrawer)
app.use(createPinia())
app.use(router)
app.mount('#app')
