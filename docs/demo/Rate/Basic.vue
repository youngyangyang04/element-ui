<template lang="">
  <div>
    <el-rate
    :num="rateValue"
    ></el-rate>
    <el-rate
    :num="rateValue"
    :max=10
    ></el-rate>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rateValue = ref(3)
import ElRate from '@/components/Rate/Rate.vue'
</script>