<script setup>
import ElButton from '@/components/Button/Button.vue'
import { createMessage } from '@/components/Message/method'
const open = (type) => {
  createMessage({ 
    message: 'message消息提示',
    showClose: true,
    duration: 0
  })
}
</script>
<template>
  <el-button @click="open('info')" type="info"> Info </el-button>
</template>