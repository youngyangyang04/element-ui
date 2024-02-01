<template>
  <div class="el-dropdown" @click="toggleDropdown">
    <div class="el-dropdown-trigger">
      <slot name="trigger"></slot>
    </div>
    
    <transition name="el-fade-in">
      <div v-if="visible" class="el-dropdown-menu">
        <slot name="content"></slot>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref,onMounted,onUnmounted } from 'vue';

const visible = ref(false);

const toggleDropdown = () => {
  visible.value = !visible.value;
};

// 关闭下拉框的事件监听
const closeDropdown = () => {
  visible.value = false;
};

// 添加全局点击事件监听器
onMounted(() => {
  document.addEventListener('click', closeDropdown);
});

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown);
});
defineOptions({
  name: 'ElDropdown'
})
</script>

<style scoped>

</style>
