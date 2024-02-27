<template lang="">
  <div>
    <el-rate
    :num="rateValue"
    size="small"
    ></el-rate>
    <el-rate
    :num="rateValue"
    size="default"
    ></el-rate>
    <el-rate
    :num="rateValue"
    size="large"
    ></el-rate>
  </div>
</template>
<script lang="ts" setup >
import { ref } from 'vue'
const rateValue = ref(3)
import ElRate from '@/components/Rate/Rate.vue'
</script>