<script>
import Menu from '@/components/Menu.vue'
import FAQ from '@/components/FAQ.vue'
export default {
  components: { Menu, FAQ },
  data() {
    return {
      faqs: [
        {
          question: 'What came first, the chicken or the egg?',
          answer: 'Elliphino...',
        },
        {
          question: 'Who put the bop in the bop shabop shabop?',
          answer: 'Sergeant Burgermarpher in 1922 at a Brooklyn speakeasy.'
        },
        { 
          question: 'Where does a general keep their armies?',
          answer: 'Up their sleevies.',
        }
      ],
    }
  },
}
</script>

<template>
  <div class="about flex flex-col bg-lime-100">
    <div class="w-full flex justify-start bg-gray-400">
      <Menu />
    </div>
    <h1 class="text-center text-3xl font-bold">About Page</h1>
    <p class="text-center text-lg m-5">
      <FAQ
        v-for="(item, i) in faqs"
        :key="i"
        :question="item.question"
        :answer="item.answer"
      />
    </p>
  </div>
</template>

<style>

</style>
