<template lang="">
  <div 
  class="el-collapse-item"
  :class="{
    'is-disabled': disabled
  }"
  >
    <!-- 接收 title 和 content -->
    <div 
    class="el-collapse-item-title"
    @click="handleClick"
    :id="`item-title-${name}`"
    >
      <slot name="title">{{ title }}</slot>
    </div>
    <!-- content区域 -->
    <div 
      class="el-collapse-item-content" 
      v-show="isActive"
      :id="`item-content-${name}`">
      <slot></slot>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { inject, computed } from 'vue'
import { collapseContextKey } from './types'
import type { CollapseItemProps } from './types'
defineOptions({
  name: 'ElCollapseItem'
})
const props = defineProps<CollapseItemProps>()
// Inject的数据
const collapseContext = inject(collapseContextKey)
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name)
})
const handleClick = () => {
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>
<style lang="">
  
</style>