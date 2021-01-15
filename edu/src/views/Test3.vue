<template>
  <div>
    Hellow World! {{ message }}
    <div>
      <span class="text-red-400 md:text-indigo-600" :title="title"
        >여기에 마우스를 올려다 주세요.</span
      >
    </div>
    <div>
      <p v-if="seen">이제 나를 볼 수 있어요</p>
    </div>
    <!-- <div>
    <ol>
      <li v- for="todo in todos" :key="todo.id">
        {{todo.text}}
       </li>
    </ol>
  </div-->
    <div class="w-1/2 mx-auto mt-6 mb-3 text-left">
      <input type="text" v-model="todoText" class="border" />
      <button class="border h-7 px-3" @click="addTodo">입력</button>
    </div>
    <table class="border-collapse w-1/2 mx-auto my-5">
      <thead>
        <tr>
          <th
            class="p-1 font-light uppercase bg-blue-400 text-black-500 border boder-blue-400 hidden lg:table-cell"
          >
            선택하여 삭제
          </th>
          <th
            class="p-1 font-light uppercase bg-blue-400 text-black-500 border boder-blue-400 hidden lg:table-cell"
          >
            Id
          </th>
          <th
            class="p-1 font-light uppercase bg-blue-400 text-black-500 border boder-blue-400 hidden lg:table-cell"
          >
            Text
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in todos" :key="todo.id" class="hover:bg-red-50">
          <td
            class="w-full lg:w-auto p-1 text-black-500 text-center border border-b block lg:table-cell relative lg:static"
          >
            <input type="checkbox" @click="deleteTodos(todo.id)" />
          </td>
          <td
            class="w-full lg:w-auto p-1 text-black-500 text-center border border-b block lg:table-cell relative lg:static"
          >
            {{ todo.id }}
          </td>
          <td
            class="w-full lg:w-auto p-1 text-black-500 text-center border border-b block lg:table-cell relative lg:static"
          >
            {{ todo.text }}
          </td>
        </tr>
      </tbody>
    </table>
    <div class="btn-cover">
      <button :disabled="pageNum === 0" @click="prevPage" class="page-btn">
        이전
      </button>
      <span class="page-count">/page/</span>
      <button
        :disabled="pageNum >= pageCount - 1"
        @click="nextPage"
        class="page-btn"
      >
        다음
      </button>
    </div>
    <div>
      <button v-on:click="countUp">Click!!!</button>
      <p>counter ::: {{ counter }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      message: 'byunjeahyun',
      todoText: '',
      title: 'Good!!!',
      seen: true,
      todos: [
        { id: 1, text: 'javascript 배우기' },
        { id: 2, text: 'vue 배우기' },
        { id: 3, text: '무언가 멋진 것을 만들기' },
      ],
      counter: 0,
    };
  },
  created() {
    this.getTodos();
  },
  methods: {
    async getTodos() {
      const responseData = await axios.get('http://localhost:3000/todos');
      this.todos = responseData.data;
    },

    countUp() {
      this.counter++;
    },

    addTodo() {
      if (!this.todoText) return;

      const reqObj = {
        text: this.todoText,
      };

      axios.post('http://localhost:3000/todos', reqObj).then(() => {
        this.getTodos();
        this.todoText = '';
      });
    },

    deleteTodo(cId) {
      if (!this.todoText) return;

      if (confirm(cId + ' 삭제하시겠습니까?')) {
        axios.delete(`http://localhost:3000/todos/` + cId).then(() => {
          this.getTodos();
        });
      }
    },
  },
};
</script>
