<template lang="">
  <div>
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
  </div>
</template>
<script setup lang="ts">
import ElInput from '@/components/Input/Input.vue'
import ElIcon from '@/components/Icon/Icon.vue'

</script>