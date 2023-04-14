<template>
  <div class="flex items-start self-stretch relative">
    <div
      class="
        flex flex-col
        relative
        py-4
        z-10
        text-white
        font-medium
        ob-drop-shadow
        cursor-pointer
      "
      @click="handleLogoClick"
    >
      <span class="flex text-4xl" v-if="themeConfig.site.author">
        {{ themeConfig.site.author }}
      </span>
      <span v-else class="flex text-4xl animation-text">LOADING</span>
      <span class="font-extrabold text-xs uppercase">
        {{ themeConfig.site.nick || 'BLOG' }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { useAppStore } from '@/stores/app'
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Logo',
  setup() {
    const appStore = useAppStore()
    const router = useRouter()

    const handleLogoClick = () => {
      router.push('/')
    }

    return {
      handleLogoClick,
      themeConfig: computed(() => appStore.themeConfig)
    }
  }
})
</script>
