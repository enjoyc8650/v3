import { onMounted, ref } from 'vue';

export default function useCounter(time, count) {
  const counter = ref(0)
  function increment() {
    counter.value++
  }
  function decrement() {
    counter.value--
  }
  onMounted(() => {
    setTimeout(() => {
      counter.value = count
    }, time);
  })

  return {
    counter,
    increment,
    decrement
  }
}