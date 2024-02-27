<template>
  <!-- 开关容器 -->
  <div 
    class="el-switch" 
    @click="toggleSwitch" 
    :class="{ 'is-checked': switchOn, 'is-disabled': disabled, [`el-switch--${size}`]: size }"
    >
    <input 
    ref="inputInstance"
    class="el-switch__input"
    type="checkbox"
    role="switch"
    :name="name"
    :disabled="disabled"
    @keydown.enter="toggleSwitch"
    />
    <!-- activeText文字描述 -->
    <span class="el-switch__label el-switch__label--left" v-if="!inlinePrompt && inactiveText">
      {{  inactiveText }}
    </span>
    <!-- switch开关结构 -->
    <span class="el-switch__core" :style="switchStyle">
      <div class="el-switch__inner">
        <!-- 文字显示在 switch 开关内部 -->
        <span v-if="inlinePrompt && (activeText || inactiveText)" class="is-text">
          {{ switchOn ? activeText : inactiveText }}
        </span>
      </div>
      <!-- Switch开关中的开关结构 -->
      <div class="el-switch__action">
      </div>
    </span>
    <!-- inactiveText文字描述 -->
    <span class="el-switch__label el-switch__label--right" v-if="!inlinePrompt && activeText">
      {{ activeText }}
    </span>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch, computed } from 'vue';
import { SwitchProps, SwitchEmits } from './types'

defineOptions({
  name: 'ElSwitch'
})
const inputInstance = ref<HTMLInputElement>()

// 设置默认属性
const props = withDefaults(defineProps<SwitchProps>(), {
  disabled: false,
  size: 'large',
  activeValue: true,
  inactiveValue: false,
  inlinePrompt: false,
})
// Switch的选项值
const switchValue = ref(props.modelValue)
const emits = defineEmits<SwitchEmits>()

// 计算开关是否处于开启状态，modelValue 是否等于 activeValue
const switchOn = ref(props.modelValue === props.activeValue);
// 监听 modelValue 的变化，同步更新组件的状态
watch(() => props.modelValue, (newValue) => {
  switchValue.value = newValue
  switchOn.value = newValue === props.activeValue;
});

// 切换开关状态
const toggleSwitch = () => {
  // 如果未禁用且不处于加载状态，则切换开关状态
  if (!props.disabled) {
    switchOn.value = !switchOn.value;
    // 根据开关状态，更新 modelValue 并触发 'update:modelValue' 和 'change' 事件
    const newValue = switchOn.value ? props.activeValue : props.inactiveValue;
    emits('update:modelValue', newValue);
    emits('change', newValue);
  }
};
// 同步checkbox的值
watch(switchOn, (newValue) => {
  inputInstance.value!.checked = newValue
})
// 根据 是否处于开启状态改变 颜色
const switchStyle = computed(() => {
  return {
    backgroundColor: switchOn.value ? props.activeColor : props.inactiveColor,
    border: switchOn.value ? props.activeColor : props.inactiveColor,
  }
})
</script>