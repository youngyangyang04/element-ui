import { ref, Ref } from 'vue';

export function useRate(initialNum: number, calback: () => void): [Ref<number>, (num: number) => void] {
  const rateNum: Ref<number> = ref(initialNum);

  const setRateNum = (num: number): void => {
    rateNum.value = num;
    calback()
  };

  return [rateNum, setRateNum];
}
