<template lang="">
  <div>
    <el-select v-model="test" placeholder="请选择" :options="options" clearable></el-select>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import ElSelect from '@/components/Select/Select.vue'
const options = [
  { label: '麻辣烫', value: '1'},
  { label: '小龙虾', value: '2'},
  { label: '汤圆', value: '3'},
  { label: '饺子', value: '4'}
]

const test = ref('1')
</script>