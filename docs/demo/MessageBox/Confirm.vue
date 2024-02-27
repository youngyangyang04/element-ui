<template>

    <el-button @click="showConfirmMessageBox" type="danger">ConfirmMessageBox</el-button>
</template>
<script setup>
import ElMessageBox from '@/components/MessageBox/MessageBox'
import ElButton from '@/components/Button/Button.vue'

const showConfirmMessageBox = () => {
  ElMessageBox.confirm({
    showCancelBtn: true,
    confirmBtnText: '确定',
    cancelBtnText: '取消',
    title: 'ConfirmMessageBox',
    content: 'This is ConfirmMessageBox content'
  }).then(() => {
    console.log('ConfirmMessageBox resolve')
  }).catch(() => {
    console.log('ConfirmMessageBox reject')
  })
}
</script>
