<template>
  <div class="calendar">
    <div class="calendar-operate">
      <div class="button-group">
        <button class="button" @click="changeMonth('prev')">
          <icon icon="arrow-left" size="24px" />
        </button>
        <button class="button" @click="changeMonth('next')">
          <icon icon="arrow-right" size="24px" />
        </button>
      </div>
      <div class="calendar-operate__title">{{ dateText }}</div>
      <button class="button" :disabled="isToday" @click="currentDate">今天</button>
    </div>
    <div class="calendar-header">
      <span
        v-for="(item, index) in weekMapZh"
        :key="index"
        class="calendar-header__item"
        :class="{ gray: index === 0 || index === 6 }"
        >{{ item }}</span
      >
    </div>
    <div class="calendar-content" :data-month="date.getMonth() + 1">
      <div
        v-for="(item, index) in calendarTable"
        :key="index"
        class="calendar-content__item"
        :class="[{ light: !item.isCurrentMonth }, { active: isActive(item) }]">
        {{ item.day }}
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from 'vue';
import Icon from '../Icon/Icon.vue';
import { weekMapZh, generateCalendar } from './calendar';
import { isAllTrue } from './calendar';
import { CalendarItem } from './calendar';

const date = ref<Date>(new Date());
const calendarTable = computed(() => generateCalendar(date.value));
const dateText = computed(() => {
  return `${date.value.getFullYear()}/${date.value.getMonth() + 1}`;
});

const isToday = computed(() => {
  const current = new Date();
  const validArr = [
    date.value.getFullYear() === current.getFullYear(),
    date.value.getMonth() === current.getMonth(),
    date.value.getDay() === current.getDay(),
  ];
  return isAllTrue(validArr);
});
/**
 * 当天日期高亮显示, 兼容切换日期：
 * 年月日都要对上才能高亮
 * ps: 日历可能会显示下月/上月的同样日期， 仅当月日期高亮
 */
const isActive = (item: CalendarItem) => {
  return isAllTrue([
    item.day === date.value.getDate(),
    item.isCurrentMonth,
    item.month === new Date().getMonth(),
    item.year === new Date().getFullYear(),
  ]);
};
// 切换到今天
const currentDate = () => {
  date.value = new Date();
};
// 切换月份, 上个月 or 下个月
const changeMonth = (type: 'prev' | 'next'): void => {
  let month = 0;
  let year = 1970;
  if (type === 'prev') {
    month = date.value.getMonth() === 0 ? 11 : date.value.getMonth() - 1;
    year = month === 11 ? date.value.getFullYear() - 1 : date.value.getFullYear();
  } else {
    month = date.value.getMonth() === 11 ? 0 : date.value.getMonth() + 1;
    year = month === 0 ? date.value.getFullYear() + 1 : date.value.getFullYear();
  }

  if (month === new Date().getMonth()) {
    currentDate();
    return;
  }

  date.value.setDate(1);
  date.value.setMonth(month);
  date.value.setFullYear(year);

  date.value = new Date(date.value);
};
</script>
<style scoped lang="scss">
.button {
  height: 28px;
  font-size: 12px;
  background: #fff;
  margin: 0;
  padding: 0 16px;
  border: 1px solid rgba(#979797, 0.4);
  border-radius: 14px;
  cursor: pointer;
  &:hover {
    color: #0065ff;
  }
  &:active {
    background-color: rgba(0, 0, 0, 6%);
  }
  &:disabled {
    color: #979797;
    background-color: rgba(0, 0, 0, 6.5%);
    cursor: not-allowed;
  }
}

.button-group {
  .button:first-child {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
  .button:last-child {
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    border-left: 0;
  }
  .button:not(:first-child, :last-child) {
    border-radius: 0;
    border-left: 0;
  }
}

.calendar-operate {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid rgba(#979797, 0.15);
  font-size: 18px;
  position: relative;
  &__title {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    margin: 0 8px;
  }
}

.calendar-header {
  margin-top: 6px;
  padding: 8px 0;
  font-size: 14px;
  font-weight: bold;
  display: flex;
  &__item {
    flex: 1;
    text-align: right;
    border-radius: 1px;
    &.gray {
      color: #979797;
      font-weight: normal;
    }
  }
}

.calendar-content {
  display: flex;
  flex-wrap: wrap;
  margin: 20px 0;
  position: relative;
  color: #333;
  &::after {
    content: attr(data-month);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 10em;
    font-weight: bold;
    color: rgba(#979797, 0.1);
  }
  &__item {
    height: 6em;
    flex: calc(14.2% - 8px);
    font-size: 14px;
    box-sizing: border-box;
    transition: all 0.2s ease;
    text-align: right;
    padding: 10px 0;
    margin-right: 8px;
    &:nth-child(7n),
    &:nth-child(7n-6) {
      color: #979797;
    }
    &:nth-child(7n) {
      margin-right: 0;
    }
    &.active {
      color: #0065ff;
      font-weight: bold;
      border-bottom: 2px solid #0065ff;
    }
    &:hover {
      background-color: rgba( #dbf0ff, 0.4);
      cursor: pointer;
    }
    &.light {
      color: rgba(#979797, 0.4);
      cursor: not-allowed;
    }
  }
}
</style>