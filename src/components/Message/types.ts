import type { VNode, ComponentInternalInstance } from 'vue'

// Message 组件的属性接口
export interface MessageProps {
  id: string;                       // 消息的唯一标识符
  message?: string | VNode;        // 消息内容，可以是字符串或 VNode
  duration?: number;               // 持续时间
  showClose?: boolean;             // 是否显示关闭按钮
  type?: 'success'| 'info'| 'warning'| 'danger';  // 消息类型
  zIndex: number;                   // 消息的层级
  offset?: number;                  // 偏移量
  onClose: () => void;           // 销毁消息的回调函数
}

// Message 上下文接口，用于传递给 Message 组件
export interface MessageContext {
  id: string;                       // 消息的唯一标识符
  vnode: VNode;                     // VNode
  vm: ComponentInternalInstance;    // 组件内部实例
  props: MessageProps;              // 消息属性
  destory: () => void;              // 销毁消息的方法
}

// CreateMessageProps 是 MessageProps 中去除了 onDestory、id 和 zIndex 后的类型
export type CreateMessageProps = Omit<MessageProps, 'onDestory' | 'id' | 'zIndex'>
