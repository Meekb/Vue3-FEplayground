<script setup>
import { ref, watch  } from "@vue/runtime-core"

const textVisible = ref(false)

function isElInViewport(  ) {
  // text to animate
  const shakeText = ref(document.querySelector(".shake"))
  // gets the window height
  const windowHeight = ref(window.innerHeight)
  // defines when to animate
  const shakeVisible = ref(150)
  const elTop = ref(document.querySelector(".shake").getBoundingClientRect().top)
  if (elTop < windowHeight - shakeVisible) {
    textVisible.value = true
  }
}
// single ref
watch(textVisible, (textVisible) => {
  console.log(textVisible.value)
  // shakeText.classList.add(".v-enter-active")
})

</script>

<template>
  <div @scroll="isElementInViewport" class="text-motion-component">
    <div
      class="
        text-motion__background-container
        w-full 
        flex
        justify-center
        items-center
      "
    >
      <Transition name="shake">
        <p class="v-enter-active shake text-3xl py-40 px-52 text-white font-bold leading-loose">
          Diesel Particulate Filter the aluminum hauler. Steel empty cargo van was fixed by the wheelbase. The semi truck by backhaul the forklift. Trailer unload with re-gen dispatch.
        </p>
      </Transition>
    </div>
  </div>
</template>

<style>
.text-motion__background-container {
  background-color: #9D012A;
  background: linear-gradient(180deg, hsla(344, 99%, 31%, 1) 0%, hsla(344, 64%, 79%, 1) 100%, hsla(343, 93%, 69%, 1) 100%);
}
.v-enter-active {
  animation: vertical-shaking 1s;
}
/* @keyframes tilt-shaking {
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }
} */

/* @keyframes tilt-n-move-shaking {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(5px, 5px) rotate(5deg); }
  50% { transform: translate(0, 0) rotate(0eg); }
  75% { transform: translate(-5px, 5px) rotate(-5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
} */

@keyframes vertical-shaking {
  0% { transform: translateY(0) }
  25% { transform: translateY(5px) }
  50% { transform: translateY(-5px) }
  75% { transform: translateY(5px) }
  100% { transform: translateY(0) }
}

/* @keyframes horizontal-shaking {
  0% { transform: translateX(0) }
  25% { transform: translateX(5px) }
  50% { transform: translateX(-5px) }
  75% { transform: translateX(5px) }
  100% { transform: translateX(0) }
} */

/* @keyframes jump-shaking {
  0% { transform: translateX(0) }
  25% { transform: translateY(-9px) }
  35% { transform: translateY(-9px) rotate(17deg) }
  55% { transform: translateY(-9px) rotate(-17deg) }
  65% { transform: translateY(-9px) rotate(17deg) }
  75% { transform: translateY(-9px) rotate(-17deg) }
  100% { transform: translateY(0) rotate(0) }
} */

/* @keyframes skew-x-shake {
  0% { transform: skewX(-15deg); }
  5% { transform: skewX(15deg); }
  10% { transform: skewX(-15deg); }
  15% { transform: skewX(15deg); }
  20% { transform: skewX(0deg); }
  100% { transform: skewX(0deg); }  
} */

/* @keyframes skew-y-shake {
  0% { transform: skewY(-15deg); }
  5% { transform: skewY(15deg); }
  10% { transform: skewY(-15deg); }
  15% { transform: skewY(15deg); }
  20% { transform: skewY(0deg); }
  100% { transform: skewY(0deg); }  
} */

</style>