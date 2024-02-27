// 定义Link组件的Props
export type LinkType = 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'default'
export interface LinkProps {
  // 类型
  type: LinkType, // 链接的类型，可以是 primary、success、warning、danger、info 或 default
  underline?: boolean, // 是否显示下划线，默认为 false
  disabled?: boolean, // 是否禁用，默认为 false
  href?: string, // 链接地址
  target?: string, // 链接打开的目标窗口，默认为当前窗口
  icon?: string, // 可选的图标名称
}

// 定义Link组件的事件
export const linkEmits = {
  click: (evt: MouseEvent) => evt instanceof MouseEvent, // 当链接被点击时触发的事件，返回一个布尔值表示是否为鼠标点击事件
}
export type LinkEmits = typeof linkEmits // Link组件事件的类型定义
