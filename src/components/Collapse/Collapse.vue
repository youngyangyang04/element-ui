<template lang="">
  <div class="el-collapse">
    <!-- 接收 CollapseItem 作为 slot -->
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { ref, provide, watch } from 'vue'
import type { CollapseActiveName, CollapseEmits, CollapseProps } from './types'
import { collapseContextKey } from './types';
defineOptions({
  name: 'ElCollapse'
})
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()
// 设置开启的Items
const activeNames = ref<CollapseActiveName[]>([])
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
/* 
点击对应的Item
如果Item已经在activeNames中，则删除该项
如果Item不在，则增加
*/
const setActiveNames = (_activeNames: CollapseActiveName[]) => {
  activeNames.value = _activeNames
  // const value = props.accordion ? activeNames.value[0] : activeNames.value
  emits('update:modelValue', activeNames.value)
  emits('change', activeNames.value)
}
const handleItemClick = (name: CollapseActiveName) => {
  const _activeNames = [...activeNames.value]
  if (props.accordion) {
    setActiveNames([activeNames.value[0] === 'name' ? '': name])
  } else {
    // 判断当前Item是否在activeNames中
    const index = _activeNames.indexOf(name)
    // 如果在activeNames中
    if (index > -1) {
      // 删除该项目
      _activeNames.splice(index, 1)
    } else {
      // 不存在，插入该项目
      _activeNames.push(name)
    }
    setActiveNames(_activeNames)
  }
}
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>
<style lang="">
  
</style>