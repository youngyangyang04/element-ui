<template lang="">
  <div>
    <el-switch v-model="value1"/>
    <el-switch v-model="value2" activeColor="green" inactiveColor="red"/>
  </div>
</template>
<script setup>
import ElSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>