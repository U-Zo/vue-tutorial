<template>
  <div class="todo-header">
    <h1 class="todo-header__date">{{ today }}</h1>
    <div class="todo-header__day">{{ dayName }}</div>
    <div class="todo-header__tasks">할 일 {{ undoneTasks.length }}개 남음</div>
  </div>
</template>

<script>

export default {
  name: 'TodoHead',
  data() {
    return {
      today: new Date().toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      dayName: new Date().toLocaleDateString('ko-KR', {
        weekday: 'long',
      }),
    };
  },
  computed: {
    undoneTasks() {
      return this.$store.getters.todos.filter(todo => !todo.done);
    },
  },
};
</script>

<style scoped>
.todo-header {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  border-bottom: 1px solid #e9ecef;
}

.todo-header__date {
  font-size: 36px;
}

.todo-header__day {
  color: #868e96;
  font-size: 1.2rem;
}

.todo-header__tasks {
  color: #20c997;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
}
</style>
