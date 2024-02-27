/**
 * Input组件，用于输入文本的组件
 */
<template lang="">
  <div class="el-input" :class="computedClass">
    <!-- label -->
    <label v-if="label" class="el-input-label">
      {{ label }}
    </label>
    <!-- Prepend slot 前缀slot -->
    <div v-if="$slots.prepend" class="el-input-prepend">
      <slot name="prepend"/>
    </div>
    <!-- 渲染Input -->
    <div class="el-input-container">
      <!-- Prefix Slot 前缀图标 -->
      <span v-if="$slots.prefix" class="el-input-prefix">
        <slot name="prefix"/>
      </span>
      <input
        ref="inputInstance"
        v-model="inputValue"
        class="el-input-content"
        :type="inputType"
        :disabled="disabled"
        :placeholder="placeholder"
        :readonly="readonly"
        :autofocus="autofocus"
        :autocomplete="autocomplete"
        :form="form"
        @input="handleInput"
        @change="handleChange"
        @focus="handleFocus"
        @blur="handleBlur"
      />
      <!-- clear 清除全部内容 -->
      <span 
        v-show="showClear && clearable" 
        @click="clearInput"
        class="el-input-clear"
      >
        <el-icon icon="circle-xmark"></el-icon>
      </span>
      <!-- eye 图标 显示密码 -->
      <span 
        v-show="isEyeShow" 
        @click="changeInputType"
        class="el-input-eye"
      >
        <el-icon :icon="eyeIcon"></el-icon>
      </span>
      <!-- Suffix Slot 后缀图标 -->
      <span v-if="showSuffixIcon" class="el-input-suffix">
        <slot name="suffix"/>
      </span>
    </div>
    <!-- Prepend slot 后缀slot -->
    <div v-if="$slots.append" class="el-input-append">
      <slot name="append"/>
    </div>
  </div>
</template>
<script setup lang="ts">
import type { InputProps, InputEmits } from './types'
import { ref, computed, useSlots, watch, inject } from 'vue';
import type { Ref } from 'vue'
import { formItemContextKey } from '../Form/types'
import ElIcon from '../Icon/Icon.vue'
const isFocus = ref(false)
const slots = useSlots()
// 定义组件名称
defineOptions({
  name: 'ElInput'
})
// 定义Props,并设置默认值
const props = withDefaults(defineProps<InputProps>(), {
  type: 'input',
  size: 'default',
  modelValue: '',
  placeholder: 'Please input'
})

// 定义emits
const emits = defineEmits<InputEmits>()
// 计算属性：根据props设置input组件类名
const computedClass = computed(() => {
  return {
    [`el-input--${props.type}`]: props.type,
    'is-disabled': props.disabled,
    'is-focus': isFocus,
    [`el-input--${props.size}`]: props.size
  }
})
// 在input上绑定 modelValue
const inputValue = ref(props.modelValue)
// 处理输入事件，触发父组件的更新
const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  inputValue.value = target.value
  emits('update:modelValue', target.value)
  emits('input', target.value)
  runValidation('input')
}
// 处理change事件
const handleChange = () => {
  emits('change', inputValue.value)
  runValidation('change')
}
const handleFocus = (event: FocusEvent) => {
  isFocus.value = true
  emits('focus', event)
}
const handleBlur = (event: FocusEvent) => {
  console.log('blur triggered')
  isFocus.value = false
  emits('blur', event)
  runValidation('blur')
}
// 监听外部传入的value变化
watch(() => props.modelValue, (newValue: string) => {
  inputValue.value = newValue
})
// 是否显示 clear 图标
const clearable = computed(() => {
  return inputValue.value.length > 0
})
// 清空输入内容
const clearInput = () => {
  inputValue.value = ''
  emits('update:modelValue', '')
}
// 后缀图标是否显示
const showSuffixIcon = computed(() => {
  return slots.suffix && !props.showClear && !props.showPassword
})
// 是否展示eye 图标
const inputType = ref(props.type)
watch(() => props.type, (newType) => {
  inputType.value = newType
})
const isEyeShow = computed(() => {
  return props.showPassword && !props.showClear && clearable.value
})
// 图标显示: 最初表现为隐藏密码，点击eye图标后显示密码
const eyeIcon = ref('eye')
// 切换类型
const changeInputType = () => {
  // 当input类型为 password的时候，改变eyeIcon为eye, 类型为普通类型
  if (inputType.value === 'password') {
    eyeIcon.value = 'eye-slash';
    inputType.value = props.type || 'text'
    return
  }
  // 改变输入类型为 password, 隐藏输入
  inputType.value = 'password'
  eyeIcon.value = 'eye'
}
// 暴露input实例, 类型为HTMLInputElement
const inputInstance = ref() as Ref<HTMLInputElement>

const formItemContext = inject(formItemContextKey)

const runValidation = (trigger: string) => {
  if (props.validateEvent) {
    formItemContext?.validate?.(trigger).catch((err: unknown) => console.error(err))
  }
}
defineExpose({
  inputInstance
})
</script>
