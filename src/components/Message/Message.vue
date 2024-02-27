<template>
  <!-- 使用过渡效果包裹消息组件 -->
  <!-- 离开动画结束后执行销毁组件方法 -->
  <!-- 进入动画开始时执行更新高度方法 -->
  <Transition 
    name="fade-up"
    @after-leave="destroyComponent" 
    @enter="updateHeight"
  > 
    <!-- 根据 visible 控制消息是否显示 -->
    <!-- 鼠标移入时清除定时器，鼠标移出时启动定时器 -->
    <div
      class="el-message"
      v-show="visible" 
      :class="{
        [`el-message--${type}`]: type,
        'is-close': showClose
      }"
      role="alert"
      ref="messageRef"
      :style="cssStyle"
      @mouseenter="clearTimer"
      @mouseleave="startTimer"
    > 
      <div class="el-message__content">
        <slot>
          <!-- 渲染消息内容 -->
          <RenderVnode :vNode="message" v-if="message" />
        </slot>
      </div>
      <div class="el-message__close" v-if="showClose">
        <!-- 显示关闭按钮 -->
        <Icon @click.stop="visible = false" icon="xmark"/> <!-- 点击关闭按钮后隐藏消息 -->
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed, nextTick } from 'vue'
import type { MessageProps } from './types'
import RenderVnode from '../Common/RenderVnode'
import Icon from '../Icon/Icon.vue'
import { getLastBottomOffset } from './method'
import useEventListener from '../../hooks/useEventListener'

// 使用 props 定义消息组件的属性
const props = withDefaults(defineProps<MessageProps>(), {
  type: 'info', // 默认类型为 info
  duration: 3000, // 默认持续时间为 3000 毫秒
  offset: 20, // 默认偏移量为 20
})

// 使用 ref 创建响应式变量
const visible = ref(false) // 消息是否可见
const messageRef = ref<HTMLDivElement>() // 消息组件的引用

// 计算属性
const height = ref(0) // 消息组件高度
const lastOffset = computed(() => getLastBottomOffset(props.id)) // 上一个实例的最下面的坐标数字
const topOffset = computed(() => props.offset + lastOffset.value) // 元素的 top 偏移量
const bottomOffset = computed(() => height.value + topOffset.value) // 元素的 bottom 偏移量，为下一个消息组件提供
const cssStyle = computed(() => ({
  top: topOffset.value + 'px', // 动态设置 top 样式
  zIndex: props.zIndex // 动态设置 z-index 样式
}))

let timer: any

// 定时器相关函数
function startTimer() {
  if (props.duration === 0) return
  timer = setTimeout(() => {
    visible.value = false // 定时器结束后隐藏消息
  }, props.duration)
}

function clearTimer() {
  clearTimeout(timer) // 清除定时器
}

// 组件生命周期钩子
onMounted(async () => {
  visible.value = true // 组件挂载后显示消息
  startTimer() // 启动定时器
})

// 键盘事件处理函数
function keydown(e: Event) {
  const event = e as KeyboardEvent
  if (event.code === 'Escape') {
    visible.value = false // 按下 Esc 键隐藏消息
  }
}

// 监听键盘事件
useEventListener(document, 'keydown', keydown)

// 销毁组件函数
function destroyComponent () {
  props.onClose() // 调用销毁消息的回调函数
}

// 更新高度函数
function updateHeight() {
  height.value = messageRef.value!.getBoundingClientRect().height // 更新消息组件高度
}

// 公开的组件选项和属性
defineOptions({
  name: 'ElMessage' // 组件名称
})

defineExpose({
  bottomOffset,
  visible // 将 bottomOffset 和 visible 公开
})
</script>