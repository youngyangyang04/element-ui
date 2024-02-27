<template>
  <el-tooltip>
    <template #content> multiple lines<br />second line </template>
    <el-button>Top center</el-button>
  </el-tooltip>
</template>
<script setup>
import ElTooltip from '@/components/Tooltip/Tooltip.vue'
import ElButton from '@/components/Button/Button.vue'
</script>