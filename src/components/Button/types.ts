import type { PropType } from 'vue'
// 按钮类型
export type ButtonType = 'primary'| 'success'| 'info' | 'warning'| 'danger'
// 按钮尺寸, 额外的尺寸：medium、small、mini，通过设置size属性来配置它们。
export type ButtonSizeType = 'medium' | 'small' | 'large'
// 原生按钮类型
export type NativeType = 'button' | 'submit' | 'reset'
export const buttonProps = {
  type: {
    type: String as PropType<ButtonType>,
    default: 'primary'
  },
  size: {
    type: String as PropType<ButtonSizeType>,
    default: 'medium'
  },
  plain: {
    type: Boolean,
  },
  round: {
    type: Boolean,
  },
  circle: {
    type: Boolean,
  },
  disabled: {
    type: Boolean,
  },
  autofocus: {
    type: Boolean,
  },
  loading: {
    type: Boolean,
  },
  nativeType: {
    type: String as PropType<NativeType>,
    default: 'button'
  },
  icon: {
    type: String,
  }
}
