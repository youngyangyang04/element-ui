<template>
  <!-- 表单项组件模板 -->
  <div 
    class="el-form-item" 
    ref="formItemRef"
    :class="{
      'is-error': validateStatus.state === 'error',
      'is-success': validateStatus.state === 'success',
      'is-loading': validateStatus.loading,
      'is-required': isRequired
    }"
  >
    <div class="el-form-item__label">
      <slot name="label" :label="label">
        {{label}}
      </slot>
    </div>
    <div class="el-form-item__content">
      <slot :validate="validate"/>
      <div class="el-form-item__error-msg" v-if="validateStatus.state === 'error' && props.showMessage">
        {{ validateStatus.errorMsg }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 导入需要的模块
import { inject, reactive, ref, computed, onMounted, onUnmounted, provide } from 'vue'
import  AsyncValidator from 'async-validator'
import type { RuleItem } from 'async-validator'
import { isNil } from 'lodash-es'
import { formItemProps, formContextKey, formItemContextKey } from './types'
import  type {  FormItemContext, FormValidateFailure } from './types'

// 定义 props
const props = defineProps(formItemProps)

// 设置组件选项
defineOptions({
  name: 'ElFormItem'
})

// 获取表单上下文
const formContext = inject(formContextKey)

// 定义验证状态
const validateStatus = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})

// 表单项的引用
const formItemRef = ref<HTMLDivElement>()

// 计算属性，获取内部值
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})

// 初始值
let initialValue: any = undefined

// 获取表单项规则的计算属性
const getItemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop]
  } else {
    return []
  }
})

// 是否为必填项的计算属性
const isRequired = computed(() => {
  return getItemRules.value?.some(rule => rule.required)
})

// 根据触发时机获取规则
const getTriggeredRules = (trigger?: string) => {
  const itemRules = getItemRules.value
  if (itemRules) {
    return itemRules.filter(rule => {
      if (!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    }).map(({ trigger, ...rule }): RuleItem => rule)
  } else {
    return []
  }
}

// 验证字段的函数
const validate = async (trigger?: string) => {
  const modelName = props.prop
  const triggeredRules = getTriggeredRules(trigger)
  if (triggeredRules.length === 0) {
    return true
  }
  if (modelName) {
    const validator = new AsyncValidator({
      [modelName]: triggeredRules,
    })
    validateStatus.loading = true
    return validator.validate({ [modelName]: innerValue.value })
      .then(() => {
        validateStatus.state = 'success'
      })
      .catch((e: FormValidateFailure) => {
        const { errors } = e
        validateStatus.state = 'error'
        validateStatus.errorMsg = (errors && errors.length > 0) ? errors[0].message || '' : ''
        return Promise.reject(e)
      })
      .finally(() => {
        validateStatus.loading = false
      })
  }
}

// 清除验证状态的函数
const clearValidate = () => {
  validateStatus.state = 'init'
  validateStatus.errorMsg = ''
  validateStatus.loading = false
}

// 重置字段的函数
const resetField = () => {
  const model = formContext?.model
  clearValidate()
  if (model && props.prop && model[props.prop]) { 
    model[props.prop] = initialValue
  }
}

// 表单项上下文
const context: FormItemContext = reactive({
  $el: formItemRef,
  resetField,
  clearValidate,
  prop: props.prop || '',
  validate
})

// 提供表单项上下文
provide(formItemContextKey, context)

// 组件挂载时执行的钩子函数
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})

// 组件卸载时执行的钩子函数
onUnmounted(() => {
  formContext?.removeField(context)
})

// 暴露供外部使用的函数和状态
defineExpose({
  /** @description 验证状态 */
  validateStatus,
  /** @description 验证表单项 */
  validate,
  /** @description 清除验证状态 */
  clearValidate,
  /** @description 重置字段值 */
  resetField,
})
</script>
