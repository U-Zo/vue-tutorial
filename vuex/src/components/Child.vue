<template>
  <div>
    <h1>Child {{ count }}</h1>
    <button>+</button>
    <button>-</button>
  </div>
</template>

<script>
export default {
  name: 'Child',
  computed: {
    count() {
      return this.$store.state.count;
    },
  },
};
</script>

<style scoped>

</style>