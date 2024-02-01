<template lang="">
  <div class="el-rate" :style="{ color: voidColor }">
    <span
      v-for="num in max"
      class="iconfont icon-star"
      :key="num"
      :class="{ active: num <= rateNum}"
      :style="starStyle"
      @click=" setRateNum(num)"
    ></span>
  </div>
</template>

<script setup lang="ts">
import { RateProps, RateEmits } from './types';
import { useRate } from './useRate';
import { computed } from 'vue';
const props = withDefaults(defineProps<RateProps>(), {
  nums: 3,
  size: 'default',
  max: 5,
});

const emits = defineEmits<RateEmits>();

defineOptions({
  name: 'ElRate',
});

const [rateNum, setRateNum] = useRate(props.nums, () => {
  emits('changeRateNums', rateNum.value);
});

// 提取样式到 computed
const starStyle = computed(() => ({
  color: props.color,
}));
</script>
