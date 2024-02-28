import type { PropType, InjectionKey, ExtractPropTypes } from 'vue'
import type { Rules, RuleItem, ValidateError, ValidateFieldsError } from 'async-validator'

// 表单项规则类型
export interface FormItemRule extends RuleItem {
  trigger?: string;
}
// 表单规则类型
export type FormRules = Partial<Record<string, FormItemRule[]>>

// 表单组件的 props
export const formProps = {
  model: {
    type: Object as PropType<Record<string, any>>
  },
  rules: {
    type: Object as PropType<FormRules>
  }
}
// 表单项组件的 props
export const formItemProps = {
  label: {
    type: String
  },
  prop: {
    type: String
  },
  showMessage: {
    type: Boolean,
    default: true
  }
}

// 表单项组件的 props 类型
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
// 表单组件的 props 类型
export type FormProps = ExtractPropTypes<typeof formProps>

// 表单上下文接口
export interface FormContext extends FormProps {
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
  resetFields: (props?: string[]) => void;
  clearValidate: (props?: string[]) => void;
  validate: (props?: string[]) => void;
}
// 表单项上下文接口
export interface FormItemContext {
  $el: HTMLDivElement | undefined;
  resetField(): void;
  clearValidate(): void;
  prop: string;
  validate: (
    trigger: string,
  ) => any
}
// 表单验证失败接口
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}

// 表单上下文的注入键
export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
// 表单项上下文的注入键
export const formItemContextKey: InjectionKey<FormItemContext> =
  Symbol('formItemContextKey')
