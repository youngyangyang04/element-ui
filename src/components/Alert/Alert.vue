<template>
  <!-- 过渡动画 -->
  <Transition name="el-alert-fade">
    <!-- Alert 主体 -->
    <div class="el-alert" :class="elAlertClass" v-show="visible">
      <div class="el-alert__content">
        <!-- 是否显示图标 -->
        <span v-if="showIcon">
          <!-- 图标组件 -->
          <el-icon :icon="showAlertIcon()" @click.stop="visible = false"></el-icon>
        </span>
        <!-- Alert 标题和描述 -->
        <div class="el-alert__message">
          <!-- 标题 -->
          <p class="el-alert__title">
            <!-- 插槽：标题 -->
            <slot name="title">{{ title }}</slot>
          </p>
          <!-- 描述（如果有） -->
          <p v-if="description" class="el-alert--description">
            <!-- 插槽：描述 -->
            <slot>{{ description }}</slot>
          </p>
        </div>
      </div>
      <!-- 可关闭按钮 -->
      <template v-if="closable">
        <!-- 使用指定的关闭文本 -->
        <div v-if="closeText" @click="closeAlert" class="closeBtn">
          {{ closeText }}
        </div>
        <!-- 使用默认的关闭图标 -->
        <el-icon v-else icon="xmark" @click="closeAlert" class="closeBtn"></el-icon>
      </template>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { AlertProps, alertEmits } from './types'
import ElIcon from '../Icon/Icon.vue'

// 设置组件名
defineOptions({
  name: 'ElAlert'
})

// 设置默认属性
const props = withDefaults(defineProps<AlertProps>(), {
  effect: 'light',
  closable: true
})

// 定义事件触发器
const emit = defineEmits(alertEmits)

// 计算 Alert 组件的样式类
const elAlertClass = computed(() => {
  const { type, closable, center, showIcon, effect } = props
  return {
    [`el-alert--${type}`]: type,
    [`el-alert--${effect}`]: effect,
    'is-closable': closable,
    'is-center': center,
    'has-icon': showIcon
  }
})

// 控制 Alert 的显示状态
const visible = ref(true)

// 计算图标样式类
// const iconClass = computed(() => {
//   return {}
// })

// 关闭 Alert 弹窗
const closeAlert = (evt: MouseEvent) => {
  visible.value = false
  emit('close', evt)
}

// 根据警报类型返回相应的图标名称
const showAlertIcon = () => {
  switch(props.type) {
    case 'error':
      return 'circle-xmark'
    case 'info':
      return 'circle-info'
    case 'success':
      return 'circle-check'
    case 'warning':
      return 'circle-exclamation'
    default:
      return 'circle-xmark'
  }
}
</script>
