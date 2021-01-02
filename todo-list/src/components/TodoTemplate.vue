<template>
  <div class="todo">
    <TodoHead />
    <TodoList />
    <TodoForm />
  </div>
</template>

<script>
import TodoHead from '@/components/TodoHead';
import TodoList from '@/components/TodoList';
import TodoForm from '@/components/TodoForm';

export default {
  name: 'TodoTemplate',
  components: {
    TodoForm,
    TodoList,
    TodoHead,
  },
};
</script>

<style scoped>
.todo {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 512px;
  height: 800px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.75);
}
</style>
