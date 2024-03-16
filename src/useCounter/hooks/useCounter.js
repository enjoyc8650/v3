import { onMounted, ref } from 'vue';

export default function useCounter() {
  const counter = ref(0)
  function increment() {
    counter.value++
  }
  function decrement() {
    counter.value--
  }
  onMounted(() => {
    setTimeout(() => {
      counter.value = 996
    }, 3000);
  })

  return {
    counter,
    increment,
    decrement
  }
}