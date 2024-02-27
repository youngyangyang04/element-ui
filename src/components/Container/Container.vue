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
  // 如果props.direction等于'vertical'，返回true
  if (props.direction === 'vertical') {
    return true
  } else if(props.direction === 'horizontal') {
    // 如果props.direction等于'horizontal'，返回false
    return false
  }
  // 如果插槽存在且有默认插槽内容
  if(slots && slots.default) {
    // 使用slots.default获取默认插槽中的所有vNode节点
    const vNodes: VNode[] = slots.default()
    // 遍历 vNode节点数组，如果存在el-header/el-footer
    return vNodes.some(vNode => {
      // 将 vNode.type 断言为 Component 类型，然后获取组件类型属性 name
      const tag = (vNode.type as Component).name
      return tag === 'ElHeader' || tag === 'ElFooter'
    })
  } else {
    // 插槽不存在或者没有默认插槽内容，返回false
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