export type SwitchSize = 'large' | 'small'
export type SwicthValueType = string | number | boolean
export interface SwitchProps {
  modelValue?: SwicthValueType, // 开关的值，支持字符串、数字、布尔类型
  disabled?: boolean, // 是否禁用开关
  name?: string,  // 开关的名称
  size?: SwitchSize, // 开关的尺寸，支持 'large'、'small'
  activeText?: string, // 打开状态的文本
  inactiveText?: string, // 关闭状态的文本
  activeColor?: string, // 打开状态的颜色
  inactiveColor?: string, // 关闭状态的颜色
  activeValue?: SwicthValueType, // 打开状态的值，支持字符串、数字、布尔类型，默认为 true
  inactiveValue?: SwicthValueType, // 关闭状态的值，支持字符串、数字、布尔类型，默认为 false
  inlinePrompt?: boolean
} 

export interface SwitchEmits {
  (e: 'update:modelValue', value: SwicthValueType): void,
  (e: 'change', value: SwicthValueType): void // change事件
}