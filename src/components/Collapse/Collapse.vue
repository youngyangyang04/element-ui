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
// 定义组件Props，包括modelValue 和 accordion
const props = defineProps<CollapseProps>()
const emits = defineEmits<CollapseEmits>()

// 存储当前展开的项的名称数组
const activeNames = ref<CollapseActiveName[]>([])
// 监听 props.modelValue 的变化，并更新 activeNames
watch(() => props.modelValue, () => {
  activeNames.value = props.modelValue
})
/* 
点击对应的Item
如果Item已经在activeNames中，则删除该项
如果Item不在，则增加该项
更新展开项 activeNames
*/
// 定义设置活动折叠项数组的方法
const setActiveNames = (_activeNames: CollapseActiveName[]) => {
  // 更新活动折叠项数组的值
  activeNames.value = _activeNames;
  // 根据是否启用手风琴模式，触发对应的事件
  // 如果启用了手风琴模式，只触发 update:modelValue 事件，并将数组的第一个值作为参数
  // 如果未启用手风琴模式，同时触发 update:modelValue 和 change 事件，将活动折叠项数组作为参数
  emits('update:modelValue', activeNames.value);
  emits('change', activeNames.value);
}

// 定义处理折叠项点击事件的方法
const handleItemClick = (name: CollapseActiveName) => {
  // 复制一份当前活动折叠项的数组
  const _activeNames = [...activeNames.value];

  // 如果开启了手风琴模式
  if (props.accordion) {
    // 如果当前点击的折叠项是已经展开的第一个折叠项，则收起它
    // 否则，展开当前点击的折叠项，并收起其他已展开的折叠项
    setActiveNames([activeNames.value[0] === name ? '' : name]);
  } else {
    // 如果当前点击的折叠项已经在活动折叠项数组中
    const index = _activeNames.indexOf(name);
    if (index > -1) {
      // 则从数组中移除该折叠项，表示收起它
      _activeNames.splice(index, 1);
    } else {
      // 如果不在数组中，则将该折叠项添加到数组中，表示展开它
      _activeNames.push(name);
    }
    // 更新活动折叠项数组
    setActiveNames(_activeNames);
  }
}
// 向下传递数据和方法
provide(collapseContextKey, {
  activeNames,
  handleItemClick
})
</script>