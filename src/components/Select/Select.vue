<template>
  <div 
  class="el-select"
  :class="{'is-disabled': disabled }"
  @click="toggleDropdownShow"
  @mouseenter="states.mouseHover = true"
  @mouseleave="states.mouseHover = false"
  >
    <el-tooltip
    placement="bottom-start"
    manual
    ref="tooltipRef"
    :popper-options="popperOptions"
    @click-outside="changeDropdownShow(false)"
    > 
      <!-- 筛选框 -->
      <el-input
      ref="inputRef"
      v-model="states.inputValue"
      :disabled="disabled"
      :placeholder="placeholder"
      readonly
      >
        <template #suffix>
          <el-icon 
          class="el-input-clear" 
          v-if="showClearIcon" 
          icon="circle-xmark"
          @click.stop="onClear"
          >

          </el-icon>
          <el-icon v-else icon="angle-down" class="el-select-icon"
          :class="{
            'is-active': isDropdownShow
          }"
          ></el-icon>
        </template>
      </el-input>
      <!--  选项 -->
      <template #content>
        <ul class="el-select-menu">
          <template v-for="(option, index) in options" :key="index">
            <li
            class="el-select-menu-item"
            :class="{'is-disabled': option.disabled, 
            'is-selected': states.selectOption?.value === option.value}"
            :id="`el-select-menu-item-${option.value}`"
            @click.stop="itemSelect(option)"
            >
              {{ option.label }}
            </li> 
          </template>
        </ul>
      </template>
    </el-tooltip>
  </div>
</template>
<script lang="ts" setup>
import type { SelectProps, SelectEmits, SelectOptions, SelectStates } from './types'
import ElInput from '../Input/Input.vue'
import ElTooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import { ref, reactive, computed } from 'vue'
import type{ Ref } from 'vue'
import { offset } from '@popperjs/core'
import ElIcon from '../Icon/Icon.vue'
defineOptions({
  name: 'ElSelect'
})
const props = withDefaults(defineProps<SelectProps>(), {
  clearable: false
})
const emits = defineEmits<SelectEmits>()
// 查找对应的option
const findOption = (value: string) => {
  const option = props.options.find(option => option.value === value)
  return option ? option : null
}
const initialOption = findOption(props.modelValue)
// const inputValue = ref(initialOption ? initialOption.label : '')
const states = reactive<SelectStates>( {
  inputValue: initialOption ? initialOption.label : '',
  selectOption: initialOption,
  mouseHover: false
})
const tooltipRef = ref() as Ref<TooltipInstance>
const popperOptions: any = {
  modifiers: [
    {
      name: 'offset',
      options: {
        offset: [0, 9],
      },
    },
    {
      name: "sameWidth",
      enabled: true,
      fn: ({ state }: { state: any }) => {
          state.styles.popper.width = `${state.rects.reference.width}px`;
      },
      phase: "beforeWrite",
      requires: ["computeStyles"],
    }
  ],
}
const isDropdownShow = ref(false)
const inputRef = ref()
const changeDropdownShow = (show: boolean) => {
  if (show) {
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
  }
  isDropdownShow.value = show
  emits('visible-change', show)
}
const toggleDropdownShow = () => {
  if (props.disabled) return
  if (isDropdownShow.value) {
    changeDropdownShow(false)
  } else {
    changeDropdownShow(true)
  }
}
const itemSelect = (e: SelectOptions) => {
  if (e.disabled) return
  // inputValue.value = e.label
  states.inputValue = e.label
  states.selectOption = e
  emits('change', e.value)
  emits('update:modelValue', e.value)
  changeDropdownShow(false)
  // inputRef.value.ref.focus()
}
const showClearIcon = computed(() => {
  // hover clearable inputValue 
  return props.clearable && states.mouseHover && states.selectOption && states.inputValue.trim() !== ''
})
const onClear = () => {
  states.inputValue = ''
  states.selectOption = null
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
</script>