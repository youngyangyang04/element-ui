### Form.vue

* props - model: 控制所有的 formItem 的值， rules：控制所有的 rules
* fields = [], 所有表单的状态数组，有几个 Item 就有几项
* 以下为 Form 的方法
  * addField : fields.push
  * removeField: fields.remove
  * validateField
  * validate
  ```typescript
    for (const field of fields) {
    try {
      await field.validate('')
    } catch (fields) {
      validationErrors = {
        ...validationErrors,
        ...(fields as ValidateFieldsError),
      }
    }
  ```
  * resetFields
  * expose 这些方法
* provide 所有的 props 以及 方法

### FormItem.vue
* props
* 本地状态 context
```typescript
const validateState = ref<FormItemValidateState>('')
const validateStateDebounced = refDebounced(validateState, 100)
const validateMessage = ref('')
const formItemRef = ref<HTMLDivElement>()
```
* onMounted 的时候调用 addField 里面是 context
* onBeforeUnmount 的时候调用 removeField
* validate
  * 拿到 单个的 rule，可以通过 prop="delivery" 以及 Form 上面的整个 rules 数组获取
  * <el-form-item label="Instant delivery" prop="delivery">
  * <el-form  :model="ruleForm" :rules="rules"></el-form>
  * 拿到当前要验证的值：

  ```typescript
  // 172 行
  const fieldValue = computed(() => {
    const model = formContext?.model
    if (!model || !props.prop) {
      return
    }
    return getProp(model, props.prop).value
  })
  ```
  * 有了value 和 rules，可以使用 async-validator 进行验证了
  * 修改 validateState 的值
  * 将 validateState 等一系列值通过 context 提供下去

  ```typescript
  const context: FormItemContext = reactive({
    ...toRefs(props),
    $el: formItemRef,
    size: _size,
    validateState,
    labelId,
    inputIds,
    isGroup,
    hasLabel,
    addInputId,
    removeInputId,
    resetField,
    clearValidate,
    validate,
  })
  provide(formItemContextKey, context)
  ```
  * 然后配合对应的 form 表单都需要做对应的修改，它们通过inject 可以拿到context ，用 Input 举例
  ```typescript
  const handleBlur = (event: FocusEvent) => {
    focused.value = false
    emit('blur', event)
    if (props.validateEvent) {
      formItem?.validate?.('blur').catch((err) => debugWarn(err))
    }
  }
  
  ```
  ```html
  <el-icon
    v-if="validateState && validateIcon && needStatusIcon"
    :class="[
      nsInput.e('icon'),
      nsInput.e('validateIcon'),
      nsInput.is('loading', validateState === 'validating'),
    ]"
  >
    <component :is="validateIcon" />
  </el-icon>

  ```

  ```css
  // 添加错误样式
  .el-form-item.is-error .el-input__wrapper {
    box-shadow: 0 0 0 1px var(--el-color-danger) inset;
  }
  ```

