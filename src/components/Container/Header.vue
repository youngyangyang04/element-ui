<template>
  <header class="el-header" :style="headerHeight">
    <slot>Header</slot>
  </header>
</template>
<script lang="ts" setup>
import { computed } from 'vue'
import type { HeightProps } from './types'

defineOptions({
  name: 'ElHeader',
})
const props = defineProps<HeightProps>()
const headerHeight = computed(() => {
  return {
    height: (props.height || 60) + 'px'
  }
})
</script>
<style lang="">
</style>