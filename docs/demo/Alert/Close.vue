<template lang="">
  <el-alert title="success alert" type="success" />
  <el-alert title="info alert" type="info" :closable="false"/>
  <el-alert title="warning" type="warning" close-text="Gotcha" />
</template>
<script setup>
import ElAlert from '@/components/Alert/Alert.vue'
</script>