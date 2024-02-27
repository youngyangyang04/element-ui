<template lang="">
  <div class="el-rate" :style="{ color: voidColor }">
    <span
      v-for="num in max"
      class="iconfont icon-star"
      :key="num"
      :class="{ active: num <= rateNum, [`el-rate--${size}`]: true}"
      :style="{
        'color': num <= rateNum ? color : voidColor
      }"
      @click=" setRateNum(num)"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { RateProps, RateEmits } from './types';
import { useRate } from './useRate';
import { computed } from 'vue';
const props = withDefaults(defineProps<RateProps>(), {
  nums: 3,       // 默认星星数量为3
  size: 'default',  // 默认大小为'default'
  max: 5,        // 最大分数为5
});
const emits = defineEmits<RateEmits>();

defineOptions({
  name: 'ElRate',
});

const [rateNum, setRateNum] = useRate(props.nums, () => {
  // 触发改变评分数量事件
  emits('changeRateNums', rateNum.value);
});

</script>
