<template>
  <!-- Dialog对话框 -->
  <div 
    v-show="visible" 
    class="el-dialog-mask">
    <div
      ref="dialogWrapper"
      class="el-dialog-wrapper"
      :style="{ top: `${dialogTop}px`, left: `${dialogLeft}px` }"
      @mousedown="startDragging"
    >
      <div class="el-dialog-header">
        <span>{{ title }}</span>
        <button @click="closeDialog">X</button>
      </div>
      <!-- Content区域 -->
      <div class="el-dialog-content">
        <slot></slot>
      </div>
      <!-- Footer区域 -->
      <div class="el-dialog-footer">
        <slot name="footer">
          <el-button type="primary" @click="confirmDialog">Confirm</el-button>
          <el-button type="info" @click="closeDialog">Cancle</el-button>
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted, onBeforeUnmount } from 'vue';
import ElButton from '../Button/Button.vue'
defineOptions({
  name: 'ElDialog'
})
const props = defineProps(['visible', 'title']);

const dialogTop = ref(0);
const dialogLeft = ref(0);
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

const startDragging = (event: MouseEvent) => {
  isDragging = true;
  offsetX = event.clientX - dialogLeft.value;
  offsetY = event.clientY - dialogTop.value;
};

const stopDragging = () => {
  isDragging = false;
};

const handleDragging = (event: MouseEvent) => {
  if (isDragging) {
    dialogTop.value = event.clientY - offsetY;
    dialogLeft.value = event.clientX - offsetX;
  }
};

onMounted(() => {
  window.addEventListener('mousemove', handleDragging);
  window.addEventListener('mouseup', stopDragging);
});
const closeDialog = () => {
  // 处理关闭逻辑，比如触发一个事件通知父组件
};

const confirmDialog = () => {
  // 处理确认逻辑，比如触发一个事件通知父组件
};

// 在组件卸载时，移除事件监听器
onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleDragging);
  window.removeEventListener('mouseup', stopDragging);
});
</script>

<style scoped>
/* ... 省略其他样式 ... */
.el-dialog-mask {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.el-dialog-wrapper {
  background: #fff;
  width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  cursor: move;
}

.el-dialog-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

.el-dialog-content {
  margin-bottom: 20px;
}

.el-dialog-footer {
  display: flex;
  justify-content: flex-end;
}

</style>
