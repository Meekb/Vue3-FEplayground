# Vue3-mini

A Vue 3 project with [Vite](https://vitejs.dev/), [Pinia](https://pinia.vuejs.org/), [Vutensils](https://vuetensils.com/), [Histoire](https://histoire.dev/), and [Playwright](https://playwright.dev/). This is currently my learning playground for FE technologies. 

Building out a mock site for a trucking transportation related org. Pinia is not being utilized yet.

## Components:
  
  * Hero made with [Hero Generator](https://hero-generator.netlify.app/)
  * Flashcard flips with CSS - plans to shift to a Pinia state
  * Menu uses Vuetensils VDrawer to manage attributes `aria-haspopup` and `aria-expanded`  
  * MenuLinks uses Vuetensils VBtn and a v-for to distrubute data and render `RouterLink` or `<a>` accordingly  
  * Service component wrapped in a `RouterLink`
  
## Current Views

  * Home path   `/`
  * About path    `/about`
  * Service path    `/services`
      * JIT path    `/services/just-in-time`
      * Heavy Haul & Flatbed path   `/services/special-equipment`


## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
