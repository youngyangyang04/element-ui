// 定义Link组件的Props
export type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
export interface LinkProps {
  // 类型
  type: LinkType,
  underline?: boolean,
  disabled?: boolean,
  href?: string,
  target?:string,
  icon?:string
}

export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent,
}
export type LinkEmits = typeof linkEmits