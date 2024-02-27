// 引入 Popper.js 核心库的类型定义
import type { Placement, Options } from '@popperjs/core'

// 定义 Tooltip 组件的属性接口
export interface TooltipProps {
  content? : string; // 提示内容
  trigger?: 'hover' | 'click'; // 触发方式：鼠标悬停或点击
  placement?: Placement; // 提示框位置
  manual?: boolean; // 是否手动控制显示
  popperOptions?: Partial<Options>; // Popper.js 实例选项
  transition?: string; // 过渡效果
  openDelay?: number; // 打开延迟时间
  closeDelay?: number; // 关闭延迟时间
}

// 定义 Tooltip 组件的事件触发器
export interface TooltipEmits {
  // 提示框可见性变化事件
  (e: 'visible-change', value: boolean) : void;
  // 点击外部关闭事件
  (e: 'click-outside', value: boolean) : void;
}

// 定义 Tooltip 实例接口
export interface TooltipInstance {
  // 显示提示框的方法
  show: () => void;
  // 隐藏提示框的方法
  hide: () => void;
}
