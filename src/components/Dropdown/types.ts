import type { VNode } from 'vue'
import type { TooltipProps } from '../Tooltip/types'

// MenuOption内容，包含 标签、键、是否禁用、是否有分隔符号
export interface MenuOption {
  label: string | VNode;
  key: string | number;
  disabled?: boolean;
  divided?: boolean;
}

// 传入菜单项数组作为 Props 
export interface DropdownProps extends TooltipProps {
  menuOptions: MenuOption[];
  hideAfterClick?: boolean;
}

export interface DropdownEmits {
  (e:'visible-change', value: boolean) : void;
  (e:'select', value: MenuOption) : void;
}

export interface DropdownInstance {
  show: () => void;
  hide: () => void;
}


