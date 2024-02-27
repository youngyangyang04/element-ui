<template>
  <div>
    <DatePicker v-model="selectedDate" placeholder="Select date"></DatePicker>
    <p>Selected Date: {{ selectedDate }}</p>
  </div>
</template>

<script>
import DatePicker from '@/components/DatePicker/DatePicker.vue'
export default {
  name: 'DatePickerView',
  data() {
    return {
      selectedDate: ""
    }
  },
  // 其他配置和逻辑
  components: {
    DatePicker
  }
};
</script>
