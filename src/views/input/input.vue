<template lang="">
  <div>
    <el-input>
      <template #prefix>
      </template>
    </el-input>
    <el-input showClear></el-input>
    <el-input disabled></el-input>
    <el-input size="large"></el-input>
    <el-input size="small"></el-input>
    <el-input showPassword></el-input>
    <el-input>
      <template #suffix>
        <el-icon icon="calendar"></el-icon>
      </template>
    </el-input>
    <el-input>
      <template #prefix>
        <el-icon icon="magnifying-glass"></el-icon>
      </template>
    </el-input>
    <el-input>
      <template #prepend>
        Http://
      </template>
    </el-input>
    <el-input>
      <template #append>.com</template>
    </el-input>
  </div>
</template>
<script setup lang="ts">
import ElInput from '../../components/Input/Input.vue'
import ElIcon from '../../components/Icon/Icon.vue'
defineOptions({
  name: 'InputView'
})
</script>
<style lang="">
  
</style>