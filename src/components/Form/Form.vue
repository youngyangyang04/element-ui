<template>
  <form class="el-form">
    <slot/>
  </form>
</template>

<script setup lang="ts">

// * styling *
// * tests
import { provide } from 'vue'
import type { ValidateFieldsError } from 'async-validator'
import { formProps,  formContextKey  } from './types'
import type {  FormItemContext, FormContext, FormValidateFailure } from './types'

const props = defineProps(formProps)

defineOptions({
  name: 'ElForm'
})

const fields: FormItemContext[] = []

const addField: FormContext['addField'] = (field) => {
  fields.push(field)
}
const removeField: FormContext['removeField'] = (field) => {
  if (field.prop) {
    fields.splice(fields.indexOf(field), 1)
  }
}

const resetFields: FormContext['resetFields'] = (keys = []) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(field => field.resetField())
}
const clearValidate: FormContext['clearValidate'] = (keys = []) => {
  const filterArr = keys.length > 0 ? fields.filter(field => keys.includes(field.prop)) : fields
  filterArr.forEach(field => field.clearValidate())
}

// 验证所有的的Item
const validate: FormContext['validate'] = async () => {
  //const promiseArr = fields.map(field => field.validate(''))
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

defineExpose({
  /** @description validate form */
  validate,
  /** @description reset fields */
  resetFields,
  /** @description clear validation status */
  clearValidate,
})

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