import MessageBoxComponent from "./MessageBox.vue";
import { createApp, watch } from "vue";
import { MessageBoxOptions } from "./types";

/**
 * MessageBox - 创建MessageBox
 * @param {MessageBoxOptions} options - 弹窗的配置选项
 * @returns {Promise<void>} - 返回一个 Promise 对象，表示弹窗的结果
 */
const MessageBox = (options: MessageBoxOptions): Promise<void> => {
  // 创建一个 Vue 应用实例，将弹窗组件和配置选项传入
  const messageBoxApp = createApp(MessageBoxComponent, options);
  // 返回一个 Promise，用于异步处理弹窗结果
  return new Promise((resolve, reject) => {
    // 显示弹窗
    showMessageBox(messageBoxApp, { resolve, reject });
  });
};

/**
 * MessageBox 的 confirm 静态方法 - 创建带有确认按钮的弹窗
 * @param {MessageBoxOptions} options - 弹窗的配置选项
 * @returns {Promise<void>} - 返回一个 Promise 对象，表示弹窗的结果
 */
MessageBox["confirm"] = (options: MessageBoxOptions): Promise<void> => {
  // 设置额外字段，标识弹窗类型为确认对话框
  options.field = "confirm";
  // 调用 MessageBox 函数创建并返回 Promise
  return MessageBox(options);
};

/**
 * MessageBox 的 alert 静态方法 - 创建带有警告按钮的弹窗
 * @param {MessageBoxOptions} options - 弹窗的配置选项
 * @returns {Promise<void>} - 返回一个 Promise 对象，表示弹窗的结果
 */
MessageBox["alert"] = (options: MessageBoxOptions): Promise<void> => {
  // 设置额外字段，标识弹窗类型为警告框
  options.field = "alert";
  // 调用 MessageBox 函数创建并返回 Promise
  return MessageBox(options);
};

/**
 * 显示弹窗的函数
 * @param {object} app - Vue 应用实例
 * @param {object} callbacks - 包含 resolve 和 reject 回调的对象
 */
const showMessageBox = (
  app: any,
  { resolve, reject }: { resolve: () => void; reject: () => void }
): void => {
  // 创建文档碎片
  const oFragment = document.createDocumentFragment();
  // 将弹窗组件挂载到文档碎片中
  const vm = app.mount(oFragment);
  // 将文档碎片添加到 body 中，显示弹窗
  document.body.appendChild(oFragment);
  // 设置弹窗可见
  vm.setVisible(true);

  // 使用 Vue 的 watch 监听弹窗状态变化
  watch(vm.state, (state) => {
    if (!state.visible) {
      // 根据弹窗状态执行相应的回调
      switch (state.type) {
        case "cancel":
          reject(); // 用户取消操作
          break;
        case "confirm":
          resolve(); // 用户确认操作
          break;
        default:
          break;
      }
      // 隐藏并销毁弹窗
      hideMessageBox(app);
    }
  });
};

/**
 * 隐藏并销毁弹窗的函数
 * @param {object} app - Vue 应用实例
 */
const hideMessageBox = (app: any): void => {
  // 使用 Vue 的 unmount 方法卸载组件
  app.unmount();
};

// 导出 MessageBox 函数
export default MessageBox;
