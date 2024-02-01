<template lang="">
  <div>
    <div
    ref="triggerNode"
    >
      <slot>aaa</slot>
    </div>
    <div 
    ref="popperNode"
    :style="floatingStyles"
    >
      <slot>popper</slot>
    </div>
  </div>
</template>
<script setup lang="ts">
// import type { Instance } from '@popperjs/core'
// import { createPopper } from '@popperjs/core'
import { useFloating } from '@floating-ui/vue';
import { ref, onMounted } from 'vue'
defineOptions({
  name: 'ElTooltip'
})
const triggerNode = ref<HTMLElement>()
const popperNode = ref<HTMLElement>()
// let popperInstance: Instance | null = null
const { floatingStyles } = useFloating(triggerNode, popperNode, {
  placement: 'bottom'
})

</script>