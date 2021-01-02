<template>
  <div class="todo-list">
    <TodoItem
        v-for="(todo, index) in todos"
        :key="index"
        :id="todo.id"
        :todo="todo.todo"
        :done="todo.done"
    />
  </div>
</template>

<script>
import TodoItem from '@/components/TodoItem';
import { mapGetters } from 'vuex';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  computed: mapGetters([
    'todos',
  ]),
};
</script>

<style scoped>
.todo-list {
  flex: 1;
  padding: 20px 32px 48px;
  overflow-y: auto;
}
</style>
