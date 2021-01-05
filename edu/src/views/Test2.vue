<template>
  <div>
    Hello World! {{ message }}
    <div>
      <span class="text-green-400 md:text-indigo-600" :title="title"
        >여기에 마우스를 올려보세요.</span
      >
    </div>
    <div>
      <p v-if="seen">이제 나를 볼 수 있어요</p>
    </div>
    <div class="space-x-2">
      <input
        class="p-1 border"
        type="text"
        v-model="todoText"
        @keydown.enter="addTodo"
      />
      <button class="bg-green-400 text-white p-1" @click="addTodo">입력</button>
      <button class="bg-green-400 text-white p-1" @click="getTodos">
        불러오기
      </button>
      <button class="bg-green-400 text-white p-1" @click="deleteTodos">
        삭제
      </button>
      <div>
        <input
          type="text"
          class="p-1 border"
          placeholder="검색"
          @keyup="searchTodos"
          v-model="searchTodoName"
        />
      </div>
    </div>
    <table class="mx-auto rounded-lg shadow overflow-hidden">
      <thead class="text-white bg-green-400">
        <tr>
          <th>Check</th>
          <th class="px-10">ID</th>
          <th class="px-20">TEXT</th>
        </tr>
      </thead>
      <tbody class="divide-y">
        <tr v-for="todo in todos" :key="todo.id">
          <td><input type="checkbox" v-model="todo.isChecked" /></td>
          <td>{{ todo.id }}</td>
          <td class="text-left">{{ todo.text }}</td>
        </tr>
      </tbody>
    </table>
    <button v-on:click="countUp" class="button">Click</button>
    <p>counter ::: {{ counter }}</p>
    <p>뒤집힌 메시지: "{{ reversedMessage }}"</p>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  // 객체로 정의하면 모든 컴포넌트에서 동일한 객체를 사용하게 됨
  // 싱글톤 패턴
  data() {
    return {
      message: 'CrackCo',
      title: 'Good!!',
      seen: true,
      todoStore: [],
      todos: [],
      searchTodoName: '',
      counter: 0,
      todoText: '',
    };
  },
  computed: {
    reversedMessage: function() {
      return this.message
        .split('')
        .reverse()
        .join('');
    },
  },
  methods: {
    countUp() {
      this.counter++;
    },
    getTodos() {
      axios.get('http://localhost:3000/todos').then((res) => {
        this.todoStore = this.todos = res.data;
      });
    },
    addTodo() {
      if (!this.todoText) return;
      const reqObj = {
        text: this.todoText,
        isChecked: false,
      };

      axios
        .post('http://localhost:3000/todos', reqObj)
        .then(() => this.getTodos());
      this.todoText = '';
    },
    deleteTodos() {
      this.todos.forEach((todo) => {
        if (todo.isChecked) {
          axios
            .delete(`http://localhost:3000/todos/${todo.id}`)
            .catch((err) => new Error(err));
        }
      });

      this.getTodos();
    },
    searchTodos() {},
  },
  created() {},
};
</script>

<style lang="scss" scoped>
.button {
  @apply p-2 border;
}
</style>
