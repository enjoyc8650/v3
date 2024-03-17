<template>
  <h2>About计数: {{ counter }}</h2>
  <button @click="increment">+</button>
  <button @click="decrement">-</button>
</template>

<script>
import useCounter from '../hooks/useCounter';

export default {
  setup() {
    return {
      ...useCounter(4000, 200)
    }
  }
}
</script>

<style scpoed>
  h2 {
    background-color: #16c902;
  }
</style>