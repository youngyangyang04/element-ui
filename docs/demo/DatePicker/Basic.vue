<template>
  <div>
    <DatePicker v-model="selectedDate" placeholder="Select date"></DatePicker>
    <p>Selected Date: {{ selectedDate }}</p>
  </div>
</template>

<script setup>
import DatePicker from '@/components/DatePicker/DatePicker.vue'
import { ref } from 'vue'
const selectDate = ref("")

</script>
