<script>
import { ref, onMounted  } from "@vue/runtime-core"
export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'fade'
    }
  },
  setup() {
    const target = ref();
    const animate = ref(false);
    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting;
      },
      {
        threshold: 0.5
      }
    );
    onMounted(() => {
      observer.observe(target.value);
    });
    return {
      animate,
      target
    };
  }
};

</script>

<template>
  <div class="text-motion-component pt-10">
    <div
      ref="target"
      class="
        text-motion__background-container
        w-full 
        flex
        justify-center
        items-center
      "
    >
      <transition :name="animationType">
          <div v-if="animate" class="animated-component">
            <div class="text-3xl text-white leading-loose px-96 py-28">
              <slot />
            </div>
          </div>
      </transition>

    </div>
  </div>
</template>

<style scoped>
.text-motion__background-container {
  background: linear-gradient(360deg, hsla(345, 96%, 19%, 1) 41%, hsla(345, 96%, 31%, 1) 97%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.9s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>