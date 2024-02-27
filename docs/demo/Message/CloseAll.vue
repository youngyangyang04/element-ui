<script setup>
import ElButton from '@/components/Button/Button.vue'
import { createMessage, closeAll } from '@/components/Message/method'
const open = (type) => {
  createMessage({ 
    message: 'message消息提示1',
    duration: 0
  })
  createMessage({ 
    message: 'message消息提示2',
    duration: 0
  })
  createMessage({ 
    message: 'message消息提示3',
    duration: 0
  })
  createMessage({ 
    message: 'message消息提示4',
    duration: 0
  })
  createMessage({ 
    message: 'message消息提示5',
    duration: 0
  })
}
const closeAllMessage = () => {
  closeAll()
}
</script>
<template>
  <el-button @click="open('info')" type="info"> 创建多条消息 </el-button>
  <el-button @click="closeAllMessage">关闭所有消息</el-button>
</template>