import type { Ref, InjectionKey } from 'vue'
// 定义组件接收的props: Name类型
export type CollapseActiveName = string | number

// CollapseItem组件接收的props: name标识/title标题/disabled是否禁用
// title和disabled是非必选值
export interface CollapseItemProps {
  name: CollapseActiveName,
  title?: string,
  disabled?: boolean
}

// 接收Inject数据类型
export interface CollapseContext {
  activeNames: Ref<CollapseActiveName[]>,
  handleItemClick: (name: CollapseActiveName) => void
}

export const collapseContextKey: InjectionKey<CollapseContext> = Symbol('collapseContextKey')

export interface CollapseProps {
  modelValue: CollapseActiveName[],
  accordion?: boolean
}
// export const UPDATE_MODEL_EVENT = 'update:modelValue'
// export const CHANGE_EVENT = 'change'
// export const INPUT_EVENT = 'input'
export interface CollapseEmits {
  (e: 'update:modelValue', value: CollapseActiveName[]): void,
  (e: 'change', values: CollapseActiveName[]): void
}


