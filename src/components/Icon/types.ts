import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
// 设定Icon组件的Props
export interface IconProps {
  icon: object | Array<string> | string | IconDefinition; // 图标对象或名称
  color?: string; // 图标颜色
  size?: '2xs' | 'xs' | 'sm' | 'lg' | 'xl' | '2xl' | '1x' | '2x' | '3x' | '4x' | '5x' | '6x' | '7x' | '8x' | '9x' | '10x'; // 图标尺寸
  border?: boolean; // 是否带边框
  fixedWidth?: boolean; // 是否固定宽度
  flip?: 'horizontal' | 'vertical' | 'both'; // 图标翻转方向
  mask?: object | Array<string> | string; // 图标遮罩
  listItem?: boolean; // 是否作为列表项
  pull?: 'right' | 'left'; // 图标对齐方式
  pulse?: boolean; // 是否有脉动效果
  rotation?: 90 | 180 | 270 | '90' | '180' | '270'; // 图标旋转角度
  swapOpacity?: boolean; // 是否交换不透明度
  spin?: boolean; // 是否旋转
  transform?: object | string; // 图标变换
  symbol?: boolean | string; // 是否作为符号
  title?: string; // 图标标题
  inverse?: boolean; // 是否反向显示
  bounce?: boolean; // 是否弹跳
  shake?: boolean; // 是否摇动
  beat?: boolean; // 是否跳动
  fade?: boolean; // 是否淡入淡出
  beatFade?: boolean; // 是否跳动并淡入淡出
  spinPulse?: boolean; // 是否旋转脉动
  spinReverse?: boolean; // 是否反向旋转
}