<template>
  <div class="square" @click="$emit('square-click')">{{ mark }}</div>
</template>

<script>
export default {
  name: 'Square',
  props: {
    mark: String,
  },
};
</script>

<style lang="scss" scoped>
.square {
  border: 1px solid #ddd;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  width: 100px;
  height: 100px;
  cursor: pointer;
}
</style>
