<template>
  <div>
    <!-- 过渡动画 -->
    <Transition name="messagebox-fade">
      <!-- 遮罩层：visible控制其显示和隐藏 -->
      <div 
        class="el-message-box"
        v-show="state.visible"
        @click.self="handleClickModal"
      > 
        <!-- MessageBox区域：居中显示在页面中 -->
        <div class="el-message-box-wrapper">
          <!-- 顶部title区域 -->
          <div class="el-message-box-title">
            <!-- title标题，props传递而来 -->
            <h1>{{  title }}</h1>
            <!-- 关闭弹窗图标 -->
            <span
              class="el-message-box-close"
              @click="handleAction('close')"
            >
              <el-icon icon="xmark"></el-icon>
            </span>
          </div>
          <!-- content 内容区域：props传递而来 -->
          <div class="el-message-box-content">
            <p>{{  content }}</p>
          </div>
          <!-- 底部按钮区域：有确认和取消按钮 -->
          <div class="el-message-box-btns">
            <!-- 确认按钮 -->
            <el-button 
              @click="handleAction('confirm')"
            >{{  confirmBtnText }}</el-button>
            <!-- 取消按钮 -->
            <el-button 
              type="danger" 
              v-if="showCancelBtn" 
              @click="handleAction('cancel')"
            >{{  cancelBtnText }}</el-button>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import ElIcon from '../Icon/Icon.vue';
import ElButton from '../Button/Button.vue';
import type { MessageBoxOptions, ActionType } from './types';

const state = reactive({
  visible: false,  // 控制弹窗显示与隐藏
  type: '' // 记录用户操作类型
});
// 设置弹窗显示或隐藏
const setVisible = (isVisible: boolean) => {
  state.visible = isVisible;
};

defineOptions({
  name: 'ElMessageBox'
});

// 从外部传递的 props
const props = defineProps<MessageBoxOptions>();

// 点击遮罩层：关闭 Messagebox 框
const handleClickModal = () => {
  // 如果允许点击遮罩层，关闭 Messagebox 框
  if (props.closeOnClickModal) {
    // 调用 handleAction() 方法，并传递 'close'
    handleAction('close');
  }
};

// 关闭 Messagebox 框
const closeModal = () => {
  // 如果弹窗已经关闭，则直接返回
  if (!state.visible) return;
  // 设置 visible 为 false，隐藏
  setVisible(false);
};

// 处理按钮点击事件
const handleAction = (type: ActionType) => {
  // 记录用户操作类型
  state.type = type;
  // 关闭弹框
  closeModal();
};

defineExpose({
  setVisible,
  state
});
</script>
