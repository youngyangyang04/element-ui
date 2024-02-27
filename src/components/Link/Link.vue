<template>
  <!-- 如果是禁用状态，则href和target失效，否则传递正确的href和target -->
  <a
    class="el-link"
    :class="linkClass"
    :href="disabled || !href ? '' : href"
    :target="disabled || !href ? undefined : target"
    @click="handleClick"
  >
    <el-icon v-if="icon" :icon="icon"></el-icon>
    <span class="el-link__inner">
      <slot>Link</slot>
    </span>
  </a>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { LinkProps, linkEmits } from './types'
import ElIcon from '../Icon/Icon.vue'

// 设置组件选项
defineOptions({
  name: 'ElLink'
})

// 提供属性的默认值
const props = withDefaults(defineProps<LinkProps>(), {
  type: 'primary',
  underline: false,
  disabled: false,
  target: '_self'
})

// 声明组件发射的事件
const emits = defineEmits(linkEmits)

// 计算Link的类名
const linkClass = computed(() => {
  const { type, underline, disabled } = props
  return [
    `el-link--${type}`,
    {
      'is-underline': underline,
      'is-disabled': disabled
    }
  ]
})

// 处理点击事件
const handleClick = (event: MouseEvent) => {
  if (!props.disabled) {
    emits('click', event)
  }
}
</script>