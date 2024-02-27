<template>
  <div>
    <ElTooltip placement="top">
      <img alt="Vue logo" class="logo" src="@/assets/vue.svg" width="125" height="125" />
      <template #content>
        <h1>Hello tooltip</h1>
      </template>
    </ElTooltip>
  </div>
</template>
<script setup lang="ts">
import ElTooltip from '@/components/Tooltip/Tooltip.vue'
defineOptions({
  name: 'TooltipView'
})

</script>
<style lang="">
  
</style>