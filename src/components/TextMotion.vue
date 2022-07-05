<script>
import { ref, onMounted  } from "@vue/runtime-core"
export default {
  name: 'AnimatedComponent',
  props: {
    animationType: {
      type: String,
      required: false,
      default: 'shake' // using default, nothing passed into component
    }
  },
  setup() {
    const target = ref();
    // animate when meets observer threshold
    const animate = ref(false);
    // detecting whether this component has entered the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        animate.value = entry.isIntersecting;
      },
      {
        threshold: 0.1
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
          <div v-if="animate" class="shake">
            <div class="text-container flex flex-start text-3xl text-white leading-loose">
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

.text-container {
  padding-top: 100px;
  padding-bottom: 100px;
  padding-left: 300px;
  padding-right:300px;
}

@media screen and (max-width: 480px) {
 .text-container {
    padding: 0;
    line-height: 60px;
  }
}

@media screen and (max-width: 785px) {
 .text-container {
    width:fit-content;
    padding: 0;
    line-height: 5px;
  }
}

@media screen and (max-width: 1189px) {
 .text-container {
    width: 100%;
    padding-left: 7.5em;
    padding-right: 7.5em;
    line-height: 60px;
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  transform: translate3d(0, 0, 0);
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}

</style>
