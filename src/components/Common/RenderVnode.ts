// 动态渲染传递的虚拟节点
import { defineComponent } from 'vue'
const RenderVnode = defineComponent({
  props: {
    vNode: {
      type: [String, Object],
      required: true
    }
  },
  setup(props) {
    return () => props.vNode
  }
})

export default RenderVnode