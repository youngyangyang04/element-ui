<template>
  <div
    class="el-dropdown"
  >
  <Tooltip 
    :trigger="trigger" 
    :placement="placement"
    :popper-options="popperOptions"
    :open-delay="openDelay"
    :close-delay="closeDelay"
    :manual="manual"
    @visible-change="visibleChange"
    ref="tooltipRef"
  >
    <slot />
    <template #content>
      <ul class="el-dropdown__menu">
        <template v-for="item in menuOptions" :key="item.key">
          <!-- divided情况下 添加分隔线 -->
          <li     
            v-if="item.divided"
            role="separator"
            class="divided-placeholder"
          />
          <!-- 点击 菜单项，emit select事件 -->
          <li
            class="el-dropdown__item"
            @click="itemClick(item)"
            :class="{'is-disabled': item.disabled, 'is-divided': item.divided }"
            :id="`dropdown-item-${item.key}`"
          > 
            <!-- 渲染 label 字符串 或者 VNode -->
            <!-- {{  item.label }} -->
            <RenderVnode :vNode="item.label"/>
          </li>
        </template>
      </ul>
    </template>
  </Tooltip>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import type { DropdownProps, DropdownInstance, DropdownEmits, MenuOption } from './types'
import Tooltip from '../Tooltip/Tooltip.vue'
import RenderVnode from '../Common/RenderVnode'
import type { TooltipInstance } from '../Tooltip/types'
defineOptions({
  name: 'ElDropdown'
})
const props = withDefaults(defineProps<DropdownProps>(), { hideAfterClick: true })
const emits = defineEmits<DropdownEmits>()
const tooltipRef = ref<TooltipInstance | null>(null)
const visibleChange = (e: boolean) => {
  emits('visible-change', e)
}
// 点击 菜单项
const itemClick = (e: MenuOption) => {
  // 处理禁用状态下的菜单项
  if (e.disabled) {
    return
  }
  // emit select事件
  emits('select', e)
  // 点击之后是否隐藏
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}
defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>

