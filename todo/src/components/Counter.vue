<template>
  <div>
    <h1>Child {{ $store.state.count }}</h1>
    <button @click="onIncrease">+</button>
    <button @click="onDecrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  props: {
    onIncrease: Function, // 증가
    onDecrease: Function, // 감소
  },
};
</script>

<style scoped>

</style>
