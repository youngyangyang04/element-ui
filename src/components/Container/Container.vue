<template lang="">
  <section
    :class="containerClass"
  >
    <slot></slot>
  </section>
</template>
<script setup lang="ts">
import { computed, useSlots} from 'vue'
import type { Component, VNode } from 'vue'
defineOptions({
  name: 'ElContainer'
})
interface ContainerProps {
  direction: 'horizontal' | 'vertical'
}
const slots = useSlots()
// 判断布局方向是否是Vertical
const isVertical = computed(() => {
  if (props.direction === 'vertical') {
    return true
  } else if(props.direction === 'horizontal') {
    return false
  }
  if(slots && slots.default) {
    const vNodes: VNode[] = slots.default()
    return vNodes.some(vNode => {
      const tag = (vNode.type as Component).name
      return tag === 'ElHeader' || tag === 'ElFooter'
    })
  } else {
    return false
  }
})
/* 
'horizontal' | 'vertical'
子元素中有 el-header 或 el-footer 时为 vertical，否则为 horizontal
根据是否包含 el-header 或 el-footer 子组件设置容器的方向
*/
const props = defineProps<ContainerProps>()
const containerClass = computed(() => {
  return {
    'el-container': true,
    'el-container-horizontal': !isVertical.value,
    'el-container-vertical': isVertical.value
  }
})
</script>
<style>
</style>