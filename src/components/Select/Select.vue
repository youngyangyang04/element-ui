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
      :placeholder="filteredPlaceholder"
      :readonly="!filterable"
      @input="debounceOnFilter"
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
        <!-- loading -->
        <div class="el-select-loading" v-if="states.loading">

        </div>
        <!-- No Data -->
        <div class="el-select-nodata" v-if="filterable && filterOptions.length === 0">

        </div>
        <ul class="el-select-menu" v-else>
          <template v-for="(option, index) in filterOptions" :key="index">
            <li
            class="el-select-menu-item"
            :class="{'is-disabled': option.disabled, 
            'is-selected': states.selectOption?.value === option.value}"
            :id="`el-select-menu-item-${option.value}`"
            @click.stop="itemSelect(option)"
            > 
              <RenderVnode :vNode="renderLabel ? renderLabel(option) : option.label"/>
            </li> 
          </template>
        </ul>
      </template>
    </el-tooltip>
  </div>
</template>
<script lang="ts" setup>
import type { SelectProps, SelectEmits, SelectOptions, SelectStates, RenderLabelFunc } from './types'
import ElInput from '../Input/Input.vue'
import ElTooltip from '../Tooltip/Tooltip.vue'
import type { TooltipInstance } from '../Tooltip/types'
import { ref, reactive, computed, watch } from 'vue'
import type{ Ref } from 'vue'
// import { offset } from '@popperjs/core'
import ElIcon from '../Icon/Icon.vue'
import RenderVnode from '../Common/RenderVnode'
import { isFunction, debounce } from 'lodash-es'
defineOptions({
  name: 'ElSelect'
})
const props = withDefaults(defineProps<SelectProps>(), {
  clearable: false,
  // 设置数组默认值
  options: () => []
})
const emits = defineEmits<SelectEmits>()
const timeout = computed((() => props.remote ? 300 : 0))
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
  mouseHover: false,
  loading: false
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
const filterOptions = ref(props.options)
watch(() => props.options, (newOptions) => {
  filterOptions.value = newOptions
})
const generateFilterOptions = async (searchValue: string) => {
  if (!props.filterable) return
  if (props.filterMethod && isFunction(props.filterMethod)) {
    filterOptions.value = props.filterMethod(searchValue)
  } else if(props.remote && props.remoteMethod && isFunction(props.remoteMethod)) {
    states.loading = true
    try {
      // 远程请求支持防抖
      filterOptions.value = await props.remoteMethod(searchValue)
    } catch(e) {
      console.error(e)
      filterOptions.value = []
    } finally {
      states.loading = false
    }
  }
  else { // 默认过滤规则
    filterOptions.value = props.options.filter(option => option.label.includes(searchValue))
  }
}
const onFilter = () => {
  generateFilterOptions(states.inputValue)
}
const debounceOnFilter = debounce(() => {
  onFilter()
}, timeout.value)
const isDropdownShow = ref(false)
const inputRef = ref()
const changeDropdownShow = (show: boolean) => {
  if (show) {
    // 如果是filter并且之前有值
    if (props.filterable && states.selectOption) {
      states.inputValue = ''
    }
    if (props.filterable) {
      // 默认选项的生成
      generateFilterOptions(states.inputValue)
    }
    tooltipRef.value.show()
  } else {
    tooltipRef.value.hide()
    if (props.clearable) {
      states.inputValue = states.selectOption ? states.selectOption.label : ''
    }
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
const filteredPlaceholder = computed(() => {
  if (props.filterable && states.selectOption && isDropdownShow.value) {
    return states.selectOption.label
  } else {
    return props.placeholder
  }
})
const onClear = () => {
  states.inputValue = ''
  states.selectOption = null
  emits('clear')
  emits('change', '')
  emits('update:modelValue', '')
}
</script>