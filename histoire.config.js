import { defineConfig } from 'histoire'
import { defaultColors } from 'histoire'
export default defineConfig({
  // your Histoire configuration
  theme: {
    title: 'Flashcards',
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.rose
    },
  }
})