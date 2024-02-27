<template lang="">
  <div>
    <el-rate
    :num="3"
    @changeRateNums="changeRateNums"
    disabled
    ></el-rate>
  </div>
</template>
<script lang="ts" setup >
import { ref } from 'vue'
const rateValue = ref()
import ElRate from '@/components/Rate/Rate.vue'
defineOptions({
  name: 'RateView'
})
const changeRateNums = (newRate: number) => {
  rateValue.value = newRate
}
</script>
<style lang="">
  
</style>