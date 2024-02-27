/**
 * InputProps定义了Input组件的属性列表
 */
export interface InputProps {
  modelValue?: string; // 输入框的值，双向绑定
  type?: string; // 输入框类型，例如'text', 'password'等
  disabled?: boolean; // 是否禁用输入框
  showClear?: boolean; // 是否显示清除按钮
  placeholder?: string; // 输入框的占位符文本
  size?: string; // 输入框的尺寸
  showPassword?: boolean; // 是否显示密码切换按钮（仅适用于type为'password'时）
  prefixIcon?: string; // 输入框前缀图标
  suffixIcon?: string; // 输入框后缀图标
  label?: string; // 输入框的标签文本
  readonly?: boolean; // 是否只读,
  autofocus?: boolean; // 是否自动获取焦点
  form?: string; // 表单名称
  validateEvent?: boolean; // 是否触发校验事件
  autocomplete?: string; // 自动完成属性
}

/**
 * InputEmits定义了Input组件的事件列表
 */
export interface InputEmits {
  (e: 'update:modelValue', value: string): void; // 当输入框的值改变时触发
  (e: 'input', value: string): void; // 当输入框内容发生变化时触发
  (e: 'change', value: string): void; // 当输入框内容提交（失去焦点）时触发
  (e: 'focus', value: FocusEvent): void; // 当输入框获取焦点时触发
  (e: 'blur', value: FocusEvent): void; // 当输入框失去焦点时触发
  (e: 'clear'): void; // 当清除按钮点击时触发
}

export interface InputInstance {
  ref: HTMLInputElement; // 输入框的实例引用
}
