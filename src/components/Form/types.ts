import type {  PropType, InjectionKey, ExtractPropTypes } from 'vue'
import type { Rules, RuleItem,  ValidateError, ValidateFieldsError, } from 'async-validator'

// const ruleForm = reactive({
//   name: 'Hello',
//   region: '',
//   count: '',
//   date1: '',
//   date2: '',
// })
export interface FormItemRule extends RuleItem {
  trigger?: string;
}
export type FormRules = Partial<Record<string, FormItemRule[]>>
export const formProps = {
  model: {
    type: Object as PropType<Record<string, any>>
  },
  rules: {
    type: Object as PropType<FormRules>
  }
}
export const formItemProps = {
  label : {
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
export type FormItemProps = ExtractPropTypes<typeof formItemProps>
export type FormProps = ExtractPropTypes<typeof formProps>

export interface FormContext extends FormProps {
  // expose
  addField: (field: FormItemContext) => void;
  removeField: (field: FormItemContext) => void;
  resetFields: (props?: string[]) => void;
  clearValidate: (props?: string[]) => void;
  validate: (props?: string[]) => void;
}
export interface FormItemContext {
  $el: HTMLDivElement | undefined;
  resetField(): void;
  clearValidate(): void;
  prop: string;
  validate: (
    trigger: string,
  ) => any
}
export interface FormValidateFailure {
  errors: ValidateError[] | null
  fields: ValidateFieldsError
}
export const formContextKey: InjectionKey<FormContext> =
  Symbol('formContextKey')
export const formItemContextKey: InjectionKey<FormItemContext> =
Symbol('formItemContextKey')