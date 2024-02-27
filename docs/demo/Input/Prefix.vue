<template lang="">
  <div>
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
import ElInput from '@/components/Input/Input.vue'
defineOptions({
  name: 'InputView'
})
</script>
<style lang="">
  
</style>