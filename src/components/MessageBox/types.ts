/**
 * 弹出框选项接口
 */
export interface MessageBoxOptions {
  title?: string; // 弹出框标题
  content?: string; // 弹出框内容
  showCancelBtn?: boolean; // 是否显示取消按钮
  cancelBtnText?: string; // 取消按钮文本
  confirmBtnText?: string; // 确认按钮文本
  field?: string; // 额外字段
  closeOnClickModal?: boolean; // 是否在点击模态框外部时关闭弹出框
  [key: string]: unknown; // 允许添加额外的自定义属性
}
// 用户操作类型
export type ActionType = 'confirm' | 'cancel' | 'close';
