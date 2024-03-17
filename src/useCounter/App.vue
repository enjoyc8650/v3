<template>
  <div>appContent</div>
  <!-- <home></home>
  <hr>
  <about></about> -->
  <button @click="homeClick">首页</button>
  <button @click="aboutClick">关于</button>
  <hr>
  <component :is="currentPage"></component>
</template>

<script>
import Home from './views/Home.vue'
import About from './views/About.vue'
import useTitle from './hooks/useTitle';
import { ref } from 'vue';

export default {
  components: {
    Home,
    About
  },
  setup() {
    const currentPage = ref("home")

    function homeClick() {
      currentPage.value = "home"
      useTitle("首页")
    }

    function aboutClick() {
      currentPage.value = "about"
      useTitle("关于")
    }

    useTitle("首页")

    return {
      homeClick,
      aboutClick,
      currentPage
    }
  }
}
</script>

<style>
  body {
    margin: 4px;
    text-align: center;
  }

  div {
    margin: 50px 0;
  }

  button {
    margin: 8px 20px;
  }
</style>