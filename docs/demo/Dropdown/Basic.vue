<script setup>
import { h } from 'vue'
import ElDropdown from '@/components/Dropdown/Dropdown.vue'
import ElButton from '@/components/Button/Button.vue'
const options = [
  { key: 1, label: 'Action 1'},
  { key: 2, label: 'Action 2'},
  { key: 3, label: 'Action 3'},
  { key: 4, label: 'Action 4', disabled: true },
  { key: 5, label: 'Action 5', divided: true },
]
</script>
<template>
<div>
  <ElDropdown 
    placement="bottom" 
    :menu-options="options"
  >
  <ElButton type="primary"> 下拉菜单 </ElButton>
  </ELDropdown>
</div>
</template>
<style>

</style>