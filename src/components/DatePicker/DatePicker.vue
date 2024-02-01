<template>
  <div class="date-picker">
    <input
      v-model="selectedDate"
      :placeholder="placeholder"
      @focus="showCalendar = true"
      class="input-field"
    />
    <div v-if="showCalendar" class="calendar">
      <div class="header">
        <button @click="prevMonth">&lt;</button>
        <span>{{ currentMonth }}</span>
        <button @click="nextMonth">&gt;</button>
      </div>
      <div class="days">
        <div v-for="day in daysInMonth" :key="day" @click="selectDate(day)" class="day">
          {{ day }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
  name: 'ElDatePicker',
  props: {
    placeholder: {
      type: String,
      default: 'Select date',
    },
  },
  setup() {
    const selectedDate = ref('');
    const showCalendar = ref(false);
    const currentDate = ref(new Date());

    const currentMonth = computed(() => {
      const options = { month: 'long', year: 'numeric' };
      return currentDate.value.toLocaleDateString(undefined, options);
    });

    const daysInMonth = computed(() => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth();
      const days = new Date(year, month + 1, 0).getDate();
      return Array.from({ length: days }, (_, index) => index + 1);
    });

    const selectDate = (day) => {
      const year = currentDate.value.getFullYear();
      const month = currentDate.value.getMonth() + 1; // 注意月份是从 0 开始计数的
      selectedDate.value = `${year}-${month < 10 ? '0' : ''}${month}-${day < 10 ? '0' : ''}${day}`;
      showCalendar.value = false;
    };

    const prevMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1, 1);
    };

    const nextMonth = () => {
      currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1, 1);
    };

    watch(selectedDate, () => {
      showCalendar.value = false;
    });

    return {
      selectedDate,
      showCalendar,
      currentMonth,
      daysInMonth,
      selectDate,
      prevMonth,
      nextMonth,
    };
  },
};
</script>

<style scoped>

</style>
