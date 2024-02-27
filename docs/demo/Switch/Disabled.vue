<template lang="">
  <div>
    
    <el-switch v-model="value1" disabled/>
  </div>
</template>
<script setup>
import ElSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const value1 = ref(true)
</script>