import type { VNode } from "vue"
export interface SelectOptions {
  label: string,
  value: string,
  disabled?: boolean
}
export type RenderLabelFunc = (option: SelectOptions) => VNode
export type CustomFilterFunc = (value: string) => SelectOptions[]
export type CustomFilterRemoteFunc = (value: string) => Promise<SelectOptions[]>
// Select组件所需要的Props
export interface SelectProps {
  modelValue: string,
  options?: SelectOptions[],
  placeholder?: string,
  disabled?: boolean,
  clearable?: boolean,
  renderLabel?: RenderLabelFunc,
  filterable?: boolean,
  filterMethod?: CustomFilterFunc,
  remote?: boolean, // 是否开启 remote 功能
  remoteMethod?: CustomFilterFunc
}
export interface SelectStates {
  inputValue: string,
  selectOption: null | SelectOptions,
  mouseHover: boolean,
  loading: boolean
}

export interface SelectEmits {
  (e: 'change', value: string): void,
  (e: 'visible-change', value: boolean): void,
  (e: 'update:modelValue', value: string): void
  (e: 'clear'): void
}