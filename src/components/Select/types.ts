export interface SelectOptions {
  label: string,
  value: string,
  disabled?: boolean
}
// Select组件所需要的Props
export interface SelectProps {
  modelValue: string,
  options: SelectOptions[],
  placeholder?: string,
  disabled?: boolean,
  clearable?: boolean
}
export interface SelectStates {
  inputValue: string,
  selectOption: null | SelectOptions,
  mouseHover: boolean
}
export interface SelectEmits {
  (e: 'change', value: string): void,
  (e: 'visible-change', value: boolean): void,
  (e: 'update:modelValue', value: string): void
  (e: 'clear'): void
}