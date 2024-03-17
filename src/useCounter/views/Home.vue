<template>
  <h2>Home计数: {{ counter }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
import { onMounted, ref } from 'vue';
import useCounter from '../hooks/useCounter';

export default {
  setup() {
    const { counter, increment, decrement } = useCounter(2000, 100)

    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style scoped>
  h2 {
    background-color: #2fbafa;
  }
</style>