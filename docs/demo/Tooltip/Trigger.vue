<template>
  <ElTooltip 
    content="Content"
    trigger="hover"
  >
    <ElButton> Hover状态下 显示 Tooltip显示 </ElButton>
  </ElTooltip>
</template>
<script setup>
import ElTooltip from '@/components/Tooltip/Tooltip.vue'
import ElButton from '@/components/Button/Button.vue'
</script>