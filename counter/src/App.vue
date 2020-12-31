<template>
  <div id="app">
    <Counter
        :count="count"
        :on-increase="onIncrease"
        :on-decrease="onDecrease"
    />
  </div>
</template>

<script>

import Counter from '@/components/Counter';

export default {
  name: 'App',
  components: {
    Counter,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    onIncrease() {
      this.count++;
    },
    onDecrease() {
      this.count--;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
