<template>
  <div class="el-dropdown-item" @click="handleClick">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue';

const { disabled, command } = defineProps(['disabled', 'command']);
const emits = defineEmits()

const handleClick = () => {
  if (!disabled) {
    emits('command', command);
  }
};
// 添加组件选项
defineOptions({
  name: 'ElDropdownItem'
});
</script>
