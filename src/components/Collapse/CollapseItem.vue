<template lang="">
  <div 
    class="el-collapse-item"
    :class="{
      'is-disabled': disabled
    }"
  >
    <!-- CollapseItem 标题区域 -->
    <div 
      class="el-collapse-item-title"
      :id="`item-title-${name}`"
      @click="handleClick"
      :class="{
        'is-active': isActive // 根据当前项是否处于展开状态来动态添加 'is-active' 类
      }"
    >
      <!-- 使用插槽来显示 CollapseItem 的标题 -->
      <slot name="title">{{ title }}</slot>
      <!-- 可选的箭头图标，用于指示折叠状态 -->
      <el-icon icon="angle-right" class="header-angle"></el-icon>
    </div>
    <!-- CollapseItem 内容区域 -->
    <!-- 根据当前项的展开状态来动态显示或隐藏内容 -->
    <div 
      class="el-collapse-item-content" 
      v-show="isActive"  
      :id="`item-content-${name}`" 
    >
      <slot></slot>  <!-- 使用默认插槽来显示 CollapseItem 的内容 -->
    </div>
  </div>
</template>

<script lang="ts" setup>
import { inject, computed } from 'vue'
import { collapseContextKey } from './types'
import type { CollapseItemProps } from './types'
import ElIcon from '../Icon/Icon.vue'

defineOptions({
  name: 'ElCollapseItem'
})

const props = defineProps<CollapseItemProps>()

// 从 Collapse 组件中注入上下文数据
const collapseContext = inject(collapseContextKey)

// 使用计算属性判断当前项是否处于展开状态
const isActive = computed(() => {
  return collapseContext?.activeNames.value.includes(props.name)
})

// 处理点击事件，展开或折叠当前项的内容
const handleClick = () => {
  // 如果 disabled 属性为 true，则不执行展开操作
  if (props.disabled) return
  collapseContext?.handleItemClick(props.name)
}
</script>