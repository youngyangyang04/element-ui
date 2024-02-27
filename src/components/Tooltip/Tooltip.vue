<template>
  <!-- Tooltip 组件的根容器 -->
  <div
    class="el-tooltip"
    ref="popperContainerNode"
    v-on="outerEvents"
  >
    <!-- 触发 Tooltip 显示的元素 -->
    <div
      class="el-tooltip__trigger"
      ref="triggerNode"
      v-on="events"
    >
      <!-- 插槽内容 -->
      <slot />
    </div>
    <!-- Tooltip 弹出框的过渡效果 -->
    <Transition :name="transition">
      <!-- Tooltip 弹出框 -->
      <!-- v-on="obj"  用于绑定一系列事件名和对应的事件处理函数-->
      <div
        v-if="isOpen"
        class="el-tooltip__popper"
        ref="popperNode"
        v-on="dropdownEvents"
      >
        <!-- 内容插槽 -->
        <slot name="content">
          {{content}}
        </slot>
        <!-- Popper.js 箭头 -->
        <div id="arrow" data-popper-arrow></div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, reactive, onUnmounted, computed } from 'vue'
import { createPopper } from '@popperjs/core'
import type { Instance } from '@popperjs/core'
import { debounce } from 'lodash-es'
import type { TooltipProps, TooltipEmits, TooltipInstance } from './types'
import useClickOutside from '../../hooks/useClickOutside'

// 设置组件的名称为 elTooltip
defineOptions({
  name: 'elTooltip'
})

// 使用 withDefaults 定义 props，默认值为 TooltipProps 的默认值
const props = withDefaults(defineProps<TooltipProps>(), {
  placement: 'bottom',
  trigger: 'hover',
  transition: 'fade',
  openDelay: 0,
  closeDelay: 0,
})

// 定义组件的事件触发器 emits
const emits = defineEmits<TooltipEmits>()

// 创建 ref 对象来存储组件的状态和元素引用
const isOpen = ref(false)
const popperNode = ref<HTMLElement>()
const triggerNode = ref<HTMLElement>()
const popperContainerNode = ref<HTMLElement>()
let popperInstance: null | Instance = null
let events: Record<string, any> = reactive({})
let outerEvents: Record<string, any> = reactive({})
let dropdownEvents: Record<string, any> = reactive({})

// 计算关闭的延迟时间
const closeDelay = computed(() => 
  props.trigger === 'hover' && props.closeDelay === 0
  ? 50 : props.closeDelay
)

// 初始化打开和关闭的次数
let openTimes = 0
let closeTimes = 0

// 计算 Popper.js 实例的选项
const popperOptions = computed(() => {
  return {
    placement: props.placement,
    modifiers: [
      {
        name: 'offset',
        options: {
          offset: [0, 9],
        },
      }
    ],
    ...props.popperOptions
  }
})

// 定义打开和关闭 Tooltip 的函数
const open = () => {
  openTimes++
  isOpen.value = true
  emits('visible-change', true)
}

const close = () => {
  closeTimes++
  isOpen.value = false
  emits('visible-change', false)
}

// 使用 lodash 中的 debounce 函数创建打开和关闭的防抖函数
const openDebounce = debounce(open, props.openDelay)
const closeDebounce = debounce(close, closeDelay.value)

// 最终的打开和关闭函数，用于取消之前的防抖操作并调用新的防抖函数
const openFinal = () => {
  closeDebounce.cancel()
  openDebounce()
}

const closeFinal = () => {
  openDebounce.cancel()
  closeDebounce()
}

// 切换 Tooltip 的显示状态
const togglePopper = () => {
  if (isOpen.value) {
    closeFinal()
  } else {
    openFinal()
  }
}

// 监听点击组件外部的事件，以关闭 Tooltip
useClickOutside(popperContainerNode, () => {
  if (props.trigger === 'click' && isOpen.value && !props.manual) {
    closeFinal()
  }
  if (isOpen.value) {
    emits('click-outside', true)
  }
})

// 根据触发方式和手动控制属性来绑定事件
const attachEvents = () => {
  if (props.trigger === 'hover') {
    events['mouseenter'] = openFinal
    outerEvents['mouseleave'] = closeFinal
    dropdownEvents['mouseenter'] = openFinal
  } else if (props.trigger === 'click') {
    events['click'] = togglePopper
  }
}

// 如果非手动控制，则绑定事件
if (!props.manual) {
  attachEvents()
}

// 监听手动控制属性的变化，动态绑定或取消事件
watch(() => props.manual, (isManual) => {
  if (isManual) {
    events = {}
    outerEvents = {}    
  } else {
    attachEvents()
  }
})

// 监听触发方式属性的变化，重新绑定事件
watch(() => props.trigger, (newTrigger, oldTrigger) => {
  if (newTrigger !== oldTrigger) {
    events = {}
    outerEvents = {}
    attachEvents()
  }
})

// 监听 isOpen 变量的变化，创建或销毁 Popper.js 实例
watch(isOpen, (newValue) => {
  if (newValue) {
    if (triggerNode.value && popperNode.value) {
      popperInstance = createPopper(triggerNode.value, popperNode.value, popperOptions.value)
    } else {
      popperInstance?.destroy()
    }
  }
}, { flush: 'post'})

// 在组件销毁时销毁 Popper.js 实例
onUnmounted(() => {
  popperInstance?.destroy()
})

// 暴露给父组件的方法
defineExpose<TooltipInstance>({
  'show': openFinal,
  'hide': closeFinal
})
</script>
