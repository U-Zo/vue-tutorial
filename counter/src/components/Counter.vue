<template>
  <div>
    <h1>{{ count }}</h1>
    <button @click="onIncrease">+</button>
    <button @click="onDecrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    count: Number,
    onIncrease: Function,
    onDecrease: Function,
  },
};
</script>

<style scoped>

</style>
