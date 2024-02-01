// Popper.js 相关类型
import type { Placement, Options } from '@popperjs/core';

// Tooltip 组件的 props 定义
export interface TooltipProps {
  content?: string;                     // Tooltip 内容
  trigger?: 'hover' | 'click';          // 触发方式：悬停或点击
  placement?: Placement;                // Tooltip 定位方式
  manual?: boolean;                     // 是否手动控制 Tooltip 的显示与隐藏
  popperOptions?: Partial<Options>;     // Popper.js 的选项配置
  transition?: string;                  // 过渡效果的 CSS 类名
  openDelay?: number;                   // 显示延迟时间（毫秒）
  closeDelay?: number;                  // 隐藏延迟时间（毫秒）
}

// Tooltip 组件的事件定义
export interface TooltipEmits {
  (e: 'visible-change', value: boolean): void;   // 控制 Tooltip 是否可见
  (e: 'click-outside', value: boolean): void;    // 点击该组件外部，控制该组件的显示隐藏
}

// Tooltip 实例的方法定义
export interface TooltipInstance {
  show: () => void;   // 显示 Tooltip
  hide: () => void;   // 隐藏 Tooltip
}
