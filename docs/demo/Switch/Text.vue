<template lang="">
  <div>
    
    <el-switch v-model="value1" activeText="on" inactiveText="off"></el-switch>
    <el-switch v-model="value2" activeText="on" inlinePrompt inactiveText="off"></el-switch>
  </div>
</template>
<script setup>
import ElSwitch from '@/components/Switch/Switch.vue'
import { ref } from 'vue'
const value1 = ref(true)
const value2 = ref(true)
</script>