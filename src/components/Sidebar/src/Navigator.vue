<template>
  <ul
    id="sidebar-navigator"
    class="
      flex flex-row
      bg-ob-deep-800
      rounded-xl
      shadow-2xl
      justify-items-center
      overflow-hidden
    "
  >
    <li
      class="
        border-r-4 border-ob-deep-900
        flex
        justify-center
        py-3
        w-full
        hover:opacity-50 hover:text-ob
        transition-all
        cursor-pointer
      "
      @click="goBack"
    >
      <svg-icon class="inline-block text-3xl" icon-class="go-back" />
    </li>
    <li
      class="
        border-r-4 border-ob-deep-900
        flex
        justify-center
        py-3
        w-full
        hover:opacity-50 hover:text-ob
        transition-all
        cursor-pointer
      "
      @click="backToTop"
    >
      <svg-icon class="inline-block text-3xl" icon-class="back-to-top" />
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Example',
  setup() {
    const router = useRouter()

    const backToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }

    const goBack = () => {
      router.back()
    }

    return {
      goBack,
      backToTop
    }
  }
})
</script>

<style lang="scss" scoped>
#sidebar-navigator {
  svg {
    pointer-events: none;
  }
}
</style>
