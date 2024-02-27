<template>
  <div>
    <el-button type="success" @click="ElMessage.success({
      message: 'This is a success text'
    })">success</el-button>
    <el-button type="warning" @click="ElMessage.warning({
      message: 'This is a warning text'
    })">warning</el-button>
    <!-- <el-button type="info" @click="ElMessage({
      type: 'info',
      message: 'this is a message text'
    })">message</el-button>
    <el-button type="danger" @click="ElMessage({
      type: 'error',
      message: 'this is a error text'
    })">error</el-button> -->
  </div>
</template>
<script setup lang="ts">
import ElButton from '../../components/Button/Button.vue'
import ElMessage from '@/components/Message/index'
defineOptions({
  name: 'MessageView'
})
</script>
<style lang="">
  
</style>