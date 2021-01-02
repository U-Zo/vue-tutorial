<template>
  <div id="app">
    <TodoTemplate />
  </div>
</template>

<script>
import TodoTemplate from '@/components/TodoTemplate';

export default {
  name: 'App',
  components: {
    TodoTemplate,
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #e9ecef;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
}
</style>
