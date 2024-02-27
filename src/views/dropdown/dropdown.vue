<template>
  <Dropdown>
    <template v-slot:trigger>
      <button>Click me</button>
    </template>

    <template v-slot:content>
      <DropdownItem :command="1">Option 1</DropdownItem>
      <DropdownItem :command="2">Option 2</DropdownItem>
      <DropdownItem :command="3" disabled>Option 3 (Disabled)</DropdownItem>
    </template>
  </Dropdown>
</template>

<script setup lang="ts">
// import ElButton from '@/components/Button/Button.vue'
import Dropdown from '@/components/Dropdown/DropdownItem.vue'
import DropdownItem from '@/components/Dropdown/Dropdown.vue';
defineOptions({
  name: 'DropdownView'
})
</script>
