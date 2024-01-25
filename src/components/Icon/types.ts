import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
// 设定Icon组件的Props
export interface IconProps {
  icon: object | Array<string> | string | IconDefinition
  color?: string
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'
  border?: boolean
  fixedWidth?: boolean
  flip?: 'horizontal' | 'vertical' | 'both'
  mask?: object | Array<string> | string
  listItem?: boolean
  pull?: 'right' | 'left'
  pulse?: boolean
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'
  swapOpacity?: boolean
  spin?: boolean
  transform?: object | string
  symbol?: boolean | string
  title?: string
  inverse?: boolean
  bounce?: boolean
  shake?: boolean
  beat?: boolean
  fade?: boolean
  beatFade?: boolean
  spinPulse?: boolean
  spinReverse?: boolean
}