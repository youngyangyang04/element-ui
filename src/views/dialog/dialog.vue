<template>
  <div>
    <button @click="showDialog">Show Dialog</button>

    <!-- 使用 Dialog 组件 -->
    <DraggableDialog :visible="dialogVisible" title="My Dialog">
      <!-- 这里放入 Dialog 内容 -->
      <p>This is the content of the dialog.</p>

      <!-- 自定义 footer 插槽 -->
      <template v-slot:footer>
      </template>
    </DraggableDialog>
  </div>
</template>

<script setup lang="ts">
import DraggableDialog from '../../components/Dialog/Dialog.vue';
import { ref } from 'vue';
defineOptions({
  name: 'DialogView'
})
const dialogVisible = ref(false);

const showDialog = () => {
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};

const confirmDialog = () => {
  // 处理确认逻辑
  closeDialog();
};
</script>
