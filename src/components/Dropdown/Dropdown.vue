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
          <li     
            v-if="item.divided"
            role="separator"
            class="divided-placeholder"
          />
          <li
            class="el-dropdown__item"
            @click="itemClick(item)"
            :class="{'is-disabled': item.disabled, 'is-divided': item.divided }"
            :id="`dropdown-item-${item.key}`"
          >
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
const itemClick = (e: MenuOption) => {
  if (e.disabled) {
    return
  }
  emits('select', e)
  if (props.hideAfterClick) {
    tooltipRef.value?.hide()
  }
}
defineExpose<DropdownInstance>({
  show: () => tooltipRef.value?.show(),
  hide: () => tooltipRef.value?.hide()
})
</script>

