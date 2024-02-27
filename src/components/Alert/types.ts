// 定义Alert类型，可选值为 'success' | 'warning' | 'info' | 'error'
export type AlertType = 'success' | 'warning' | 'info' | 'error'

// 定义效果类型，可选值为 'light' | 'dark'
export type EffectType = 'light' | 'dark'

// 定义Alert组件的属性接口
export interface AlertProps {
  title: string; // 警报标题
  type: AlertType; // 警报类型
  description?: string; // 警报描述（可选）
  closable?: boolean; // 是否可关闭（可选）
  center?: boolean; // 是否居中显示（可选）
  showIcon?: boolean; // 是否显示图标（可选）
  effect?: EffectType; // 效果类型（可选）
  closeText?: string; // 关闭按钮文本（可选）
}

// 定义Alert组件的事件对象
export const alertEmits = {
  close: (evt: MouseEvent) => evt instanceof MouseEvent, // 关闭事件
}

// 定义Alert组件的事件类型
export type AlertEmits = typeof alertEmits

// 定义Alert实例接口
export interface AlertInstance {
  hide: () => void; // 隐藏Alert的方法
}
