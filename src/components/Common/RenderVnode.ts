// 动态渲染传递的虚拟节点
// 导入 Vue 中的 defineComponent 函数，用于定义 Vue 组件
import { defineComponent } from 'vue'

// 定义一个名为 RenderVnode 的 Vue 组件
const RenderVnode = defineComponent({

  // 定义组件的属性
  props: {
    // 接收一个名为 vNode 的属性
    vNode: {
      // 属性类型可以是字符串或对象
      type: [String, Object],
      // vNode 属性是必需的
      required: true
    }
  },

  // 设置组件的逻辑
  setup(props) {
    // 返回一个函数，这个函数返回传递进来的虚拟节点
    return () => props.vNode
  }
})

// 导出 RenderVnode 组件
export default RenderVnode
