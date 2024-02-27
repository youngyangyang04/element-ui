// 定义星级评分组件的大小类型
export type RateSize = 'large' | 'default' | 'small'

// 定义星级评分组件的Props
export interface RateProps {
  nums?: number,        // 星星数量
  size?: RateSize,      // 星星大小，支持 'large', 'default', 'small'
  max?: number,         // 最大分数
  color?: '',           // 星星颜色
  voidColor?: ''        // 未选中星星的颜色
}

// 定义星级评分组件的Emits
export interface RateEmits {
  (e: 'changeRateNums', value: number): void  // 改变评分数量事件
}
