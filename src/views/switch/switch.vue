<template lang="">
  <div>
    <el-switch v-model="value1" inactiveText="aa" activeText="bb"/>
    <el-switch v-model="value1" activeColor="green" inactiveColor="red"/>
    <el-switch v-model="value2" disabled/>
    <el-switch v-model="value3" activeText="a" inactiveText="b"></el-switch>
    <el-switch v-model="value3" activeText="a" inlinePrompt inactiveText="b"></el-switch>
    <el-switch v-model="rightValue" :activeValue="1" :inactiveValue="0"></el-switch>
    <span>{{ rightValue }}</span>
  </div>
</template>
<script setup lang="ts">
import ElSwitch from '../../components/Switch/Switch.vue'
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const rightValue = ref(1)
defineOptions({
  name: 'SwitchView'
})
</script>
<style lang="">
  
</style>