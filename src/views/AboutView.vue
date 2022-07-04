<script>
import Menu from '@/components/Menu.vue'
import FAQ from '@/components/FAQ.vue'
export default {
  components: { Menu, FAQ },
  data() {
    return {
      faqs: [
        {
          question: 'What states do you operate in?',
          answer: 'We offer services throughout the Lower 48.',
        },
        { 
          question: 'Do you haul hazardous material (hazmat)?',
          answer: 'Yes. Reach out to our shipping specialists at 555-555-5555 to discuss your transport needs.',
        },
        {
          question: 'Is a frozen or refrigerated shipment more expensive than regular freight?',
          answer: 'Yes, because of the equipment needed to keep the product frozen or refrigerated.'
        },
        {
          question: 'Do your drivers help unload?',
          answer: 'Our drivers can assist the unload at the customer\'s request. There is an additional fee for a driver assist unload.'
        },
      ],
    }
  },
}
</script>

<template>
  <div class="about flex flex-col h-screen">
    <div class="w-full flex justify-start bg-gray-400">
      <Menu />
    </div>
    <h1 class="text-center text-3xl font-bold">About Page</h1>
    <p class="text-center text-lg m-5">
      <div class="faq-container">
        <FAQ
          v-for="(item, i) in faqs"
          :key="i"
          :question="item.question"
          :answer="item.answer"
        />
      </div>
    </p>
  </div>
</template>

<style scoped>
.faq-container {
  /* background-color: #5F0219; */
  border: 2px solid #9BA3AF;
}
</style>
