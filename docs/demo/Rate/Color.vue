<template lang="">
  <div>
    <el-rate
    :num="rateValue"
    color="red"
    voidColor="blue"
    ></el-rate>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
const rateValue = ref(3)
import ElRate from '@/components/Rate/Rate.vue'
</script>