<template>
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
import { inject, reactive, ref, computed, onMounted, onUnmounted, provide } from 'vue'
import  AsyncValidator from 'async-validator'
import type { RuleItem } from 'async-validator'
import { isNil } from 'lodash-es'
import { formItemProps, formContextKey, formItemContextKey } from './types'
import  type {  FormItemContext, FormValidateFailure } from './types'
const props = defineProps(formItemProps)
defineOptions({
  name: 'ElFormItem'
})
const formContext = inject(formContextKey)
const validateStatus = reactive({
  state: 'init',
  errorMsg: '',
  loading: false
})
const formItemRef = ref<HTMLDivElement>()
// get value
const innerValue = computed(() => {
  const model = formContext?.model
  if (model && props.prop && !isNil(model[props.prop])) {
    return model[props.prop]
  } else {
    return null
  }
})

let initialValue: any = undefined
// get the rules
// return [{ type: 'string', required: true, trigger: 'blur' }, { min: 3, max: 5, message: 'Length should be 3 to 5', trigger: 'blur' }]
const getItemRules = computed(() => {
  const rules = formContext?.rules
  if (rules && props.prop && rules[props.prop]) {
    return rules[props.prop]
  } else {
    return []
  }
})
const isRequired = computed(() => {
  return getItemRules.value?.some(rule => rule.required)
})
// get rules based on which time to trigger
const getTriggeredRules = (trigger?: string) => {
  const itemRules = getItemRules.value
  if (itemRules) {
    return itemRules.filter(rule => {
      // 如果 trigger参数 没有传，说明是调用要验证所有参数
      // 假如 rule 中没有 trigger ，那么这条在任何情况下都需要验证
      if (!rule.trigger || !trigger) return true
      return rule.trigger && rule.trigger === trigger
    }).map(({ trigger, ...rule }): RuleItem => rule)
  } else {
    return []
  }
}
// validate the field
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
// clear validate
const clearValidate = () => {
  validateStatus.state = 'init'
  validateStatus.errorMsg = ''
  validateStatus.loading = false
}
const resetField = () => {
  const model = formContext?.model
  clearValidate()
  if (model && props.prop && model[props.prop]) { 
    model[props.prop] = initialValue
  }
}

const context: FormItemContext = reactive({
  $el: formItemRef,
  resetField,
  clearValidate,
  prop: props.prop || '',
  validate
})
provide(formItemContextKey, context)
onMounted(() => {
  if (props.prop) {
    formContext?.addField(context)
    initialValue = innerValue.value
  }
})
onUnmounted(() => {
  formContext?.removeField(context)
})
defineExpose({
  /** @description validation message */
  validateStatus,
  /** @description validate form item */
  validate,
  /** @description clear validation status */
  clearValidate,
  /** @description reset field value */
  resetField,
})
</script>