<template>
  <aside class="el-aside" :style="computedStyle">
    <slot>Aside</slot>
  </aside>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { WidthProps } from './types'

defineOptions({
  name: 'ElAside',
})
const props = defineProps<WidthProps>()

const computedStyle = computed(() => {
  return {
    width: (props.width || 200) + 'px'
  }
})
</script>
<style lang="">
</style>