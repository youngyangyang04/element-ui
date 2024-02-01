// 定义Input组件所需要的Props类型
export interface InputProps {
  modelValue?: string,
  type?: string,
  disabled?: boolean,
  showClear?: boolean,
  placeholder?: string
  size?: string,
  showPassword?: boolean,
  prefixIcon?: string,
  suffixIcon?: string,
  label?: string,
  readonly?: boolean
}
// 定义Input组件所需要的Emits
export interface InputEmits {
  (e: 'update:modelValue', value: string): void,
  (e: 'input', value: string): void,
  (e: 'change', value: string): void,
}