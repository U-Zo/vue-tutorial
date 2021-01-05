<template>
  <div>
    Hello World! {{ message }}
    <div>
      <span class="text-green-400 md:text-indigo-600" :title="title">
        여기에 마우스를 올려보세요.
      </span>
    </div>
    <div>
      <p v-if="seen">이제 나를 볼 수 있어요</p>
    </div>
    <div class="my-4 text-left">
      <div class="flex flex-col max-w-lg w-full mx-auto bg-gray-50 p-4">
        <h1 class="text-2xl text-center mb-4">TodoList</h1>
        <!-- todo list top -->
        <div class="mb-4 flex">
          <input
            class="p-2 focus:outline-none focus:ring shadow rounded-lg mr-4 flex-1"
            type="text"
            v-model="todoText"
            @keydown.enter="addTodo"
            placeholder="할 일을 입력하세요."
          />
          <button
            class="bg-teal-400 shadow text-white p-2 mr-2 rounded-lg font-bold focus:outline-none hover:bg-teal-500"
            @click="addTodo"
          >
            입력
          </button>
          <button
            class="bg-teal-400 shadow text-white p-2 mr-2 rounded-lg font-bold focus:outline-none hover:bg-teal-500"
            @click="getTodos"
          >
            불러오기
          </button>
          <button
            class="bg-teal-400 shadow text-white p-2 rounded-lg font-bold focus:outline-none hover:bg-teal-500"
            @click="deleteTodos"
          >
            삭제
          </button>
        </div>
        <!-- todo list table -->
        <table class="w-full rounded-t-lg shadow overflow-hidden bg-white">
          <thead class="text-white bg-teal-400">
            <tr>
              <th class="py-2 px-4 w-1">
                <input type="checkbox" @change="checkAll" />
              </th>
              <th class="px-4 w-1">ID</th>
              <th class="px-4">TEXT</th>
            </tr>
          </thead>
          <tbody class="text-gray-600 divide-y">
            <tr
              class="hover:bg-gray-100"
              v-for="todo in todosResult"
              :key="todo.id"
            >
              <td class="py-2 px-4 text-center">
                <input type="checkbox" v-model="todo.isChecked" />
              </td>
              <td class="px-4">{{ todo.id }}</td>
              <td class="px-4">{{ todo.text }}</td>
            </tr>
          </tbody>
        </table>
        <!-- todo list bottom -->
        <div
          class="space-x-2 text-right border-t p-2 bg-white shadow rounded-b-lg mb-4"
        >
          <button
            class="focus:outline-none"
            v-for="pageNum in totalPage"
            @click="getCurrentPage(pageNum)"
            :key="pageNum"
          >
            {{ pageNum }}
          </button>
        </div>
        <div class="flex text-gray-600">
          <input
            type="text"
            class="focus:ring rounded-lg shadow w-full py-2 pl-2 mr-4 outline-none"
            placeholder="검색"
            v-model="searchTodoText"
            @keyup.enter="getTodos"
          />
          <select
            class="shadow rounded-lg p-2 cursor-pointer"
            v-model="pageSize"
            @change="getTodos"
          >
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
            <option>25</option>
          </select>
        </div>
      </div>
    </div>
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
      todos: [],
      todosResult: [],
      searchTodoText: '',
      counter: 0,
      todoText: '',
      pageSize: 10,
      currentPage: 1,
      totalPage: 1,
    };
  },
  computed: {
    reversedMessage() {
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
        this.todos = res.data;

        const searchedTodos = this.todos.filter((todo) =>
          this.searchTodoText ? todo.text.includes(this.searchTodoText) : todo
        );
        const startPage = this.pageSize * (this.currentPage - 1);
        const endPage = startPage + this.pageSize;

        this.totalPage =
          Math.floor((searchedTodos.length - 1) / this.pageSize) + 1;
        this.todosResult = searchedTodos.slice(startPage, endPage);
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
      this.todosResult.forEach((todo) => {
        if (todo.isChecked) {
          axios
            .delete(`http://localhost:3000/todos/${todo.id}`)
            .then(() => {
              if (this.todosResult.length === 1) {
                this.currentPage--;
              }
              this.getTodos();
            })
            .catch((err) => new Error(err));
        }
      });
    },
    getCurrentPage(pageNum) {
      this.currentPage = pageNum;
      this.getTodos();
    },
    checkAll(e) {
      const isChecked = e.target.checked;
      this.todosResult = this.todosResult.map((todo) =>
        isChecked ? { ...todo, isChecked: true } : { ...todo, isChecked: false }
      );
    },
  },
  mounted() {
    this.getTodos();
  },
};
</script>

<style lang="scss" scoped>
.button {
  @apply p-2 border;
}
</style>
