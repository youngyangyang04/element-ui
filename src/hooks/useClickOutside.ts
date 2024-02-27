import { onMounted, onUnmounted } from 'vue'
import type { Ref } from 'vue'
const useClickOutside = (elementRef: Ref<undefined | HTMLElement>, callback: (e: MouseEvent) => void) => {
  // 处理点击事件的回调函数
  const handler = (e: MouseEvent) => {
    // 检查是否存在元素引用以及事件目标
    if (elementRef.value && e.target) {
      // 如果点击的目标不在元素内部，则调用回调函数
      if (!elementRef.value.contains(e.target as HTMLElement)) {
        callback(e)
      }
    }
  }
  // 在组件挂载时添加事件监听器
  onMounted(() => {
    document.addEventListener('click', handler)
  })
  // 在组件卸载时移除事件监听器，防止内存泄漏
  onUnmounted(() => {
    document.removeEventListener('click', handler)
  })
}

export default useClickOutside