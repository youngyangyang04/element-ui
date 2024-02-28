<template>
  <!-- 表单组件模板 -->
  <form class="el-form">
    <!-- 插槽用于表单内容 -->
    <slot/>
  </form>
</template>

<script setup lang="ts">
// 导入必要的模块
import { provide } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import { formProps, formContextKey } from './types'
import type { FormItemContext, FormContext, FormValidateFailure } from './types'

// 根据 formProps 定义属性
const props = defineProps(formProps)

// 设置组件选项
defineOptions({
  name: 'ElForm'
})

// 用于存储表单字段的数组
const fields: FormItemContext[] = []

// 添加字段到表单的函数
const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}

// 从表单中移除字段的函数
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

// 重置表单中的字段的函数
const resetFields: FormContext['resetFields'] = (keys = []) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(field => field.resetField())
}

// 清除表单中字段的验证状态的函数
const clearValidate: FormContext['clearValidate'] = (keys = []) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(field => field.clearValidate())
}

// 验证所有表单字段的函数
const validate: FormContext['validate'] = async () => {
  let validationErrors: ValidateFieldsError = {}
  for (const field of fields) {
    try {
      await field.validate('')
    } catch(e) {
      const error = e as FormValidateFailure
      validationErrors = {
        ...validationErrors,
        ...error.fields
      }
    }
  }
  if (Object.keys(validationErrors).length === 0) return true 
  return Promise.reject(validationErrors)
}

// 暴露供外部使用的函数
defineExpose({
  /** @description 验证表单 */
  validate,
  /** @description 重置字段 */
  resetFields,
  /** @description 清除验证状态 */
  clearValidate,
})

// 向子组件提供表单上下文
provide(
  formContextKey,
  {
    ...props,
    addField,
    removeField,
    resetFields,
    clearValidate,
    validate
  }
)
</script>
