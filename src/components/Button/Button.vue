<template>
  <button
    class="el-button"
    ref="_ref"
    :class="computedClass"
    :disabled="disabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
  >
    <slot></slot>
  </button>
</template>
<script setup lang="ts">
import { buttonProps } from './types'
import { computed, ref } from 'vue'
// 定义组件名称
defineOptions({
  name: 'ElButton'
})
// 接收props
const props = defineProps(buttonProps)
// 定义组件实例
const _ref = ref<HTMLButtonElement>()
// defineExpose暴露实例
defineExpose({
  ref: _ref
})
// 计算button的样式类
const computedClass = computed(() => {
  const { type, size, round, loading, circle, disabled, plain } = props
  return [
    type ? 'el-button--' + type : '',
    size ? 'el-button--' + size : '',
    { 
      'is-round': round,
      'is-loading': loading,
      'is-circle': circle,
      'is-disabled': disabled,
      'is-plain': plain,
    }
  ]
})
</script>

<style scoped>

</style>