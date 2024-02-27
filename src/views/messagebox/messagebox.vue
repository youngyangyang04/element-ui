<template lang="">
  <div>
    <el-button @click="showMessageBox">showMessageBox</el-button>
    <el-button @click="showConfirmMessageBox">showConfirmMessageBox</el-button>
  </div>
</template>
<script lang="ts" setup>
import ElMessageBox from '../../components/MessageBox/MessageBox'
import ElButton from '../../components/Button/Button.vue'
defineOptions({
  name: 'ElMessageBoxView'
})
const showMessageBox = () => {
  ElMessageBox({
    // 确认文字、标题和内容
    confirmBtnText: 'Ok',
    title: 'MessageBox',
    content: 'This is ConfirmMessageBox content'
  }).then(() => {
    console.log('MessageBox resolve')
  }).catch(() => {
    console.log('MessageBox reject')
  })
}
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
<style lang="">
  
</style>