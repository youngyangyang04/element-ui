<template lang="">
  <div>
    
    <el-switch v-model="rightValue" :activeValue="1" :inactiveValue="0"></el-switch>
    <p>{{ rightValue }}</p>
  </div>
</template>
<script setup>
import ElSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const rightValue = ref(1)
</script>