<template>
  <footer class="el-footer" :style="footerHeight">
    <slot>Footer</slot>
  </footer>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { HeightProps } from './types'

defineOptions({
  name: 'ElFooter',
})
const props = defineProps<HeightProps>()
const footerHeight = computed(() => {
  return {
    height: (props.height || 60) + 'px'
  }
})
</script>
<style lang="">

</style>