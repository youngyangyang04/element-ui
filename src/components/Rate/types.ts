export type RateSize = 'large' | 'default' | 'small'
export interface RateProps {
  nums?: number,
  size?: RateSize,
  max?: number,
  color?: '',
  voidColor?: ''
}

export interface RateEmits {
  (e: 'changeRateNums', value: number): void
}