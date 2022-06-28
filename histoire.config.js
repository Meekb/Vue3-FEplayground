import { defineConfig } from 'histoire'
import { defaultColors } from 'histoire'
export default defineConfig({
  // your Histoire configuration
  theme: {
    title: 'Playground',
    setupFile: '/src/histoire.setup.js',
    colors: {
      gray: defaultColors.zinc,
      primary: defaultColors.rose
    },
  }
})