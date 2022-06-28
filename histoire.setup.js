import { createPinia } from 'pinia'
import { defineSetupVue3 } from 'histoire/client'
import './histoire.css' // Import global CSS
export const setupVue3 = defineSetupVue3(({ app, story, variant }) => {
  const pinia = createPinia()
  app.use(pinia) // Adds Pinia store
})