import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        todo: '뷰 공부하기',
        done: true,
      },
      {
        id: 2,
        todo: '뷰엑스 공부하기',
        done: true,
      },
      {
        id: 3,
        todo: '투두리스트 만들기',
        done: false,
      },
    ],
    id: 4, // 할 일의 아이디
    todo: '', // 할 일
  },
  getters: {
    todos: state => state.todos,
    id: state => state.id,
    todo: state => state.todo,
  },
  mutations: { // setter
    onInsert: (state, payload) => {
      payload.preventDefault();
      state.todos = state.todos.concat({
        id: state.id++,
        todo: state.todo,
        done: false,
      });
      state.todo = '';
    },
    onToggle: (state, id) => {
      state.todos = state.todos.map(todo =>
          todo.id === id ? { ...todo, done: !todo.done } : todo,
      );
    },
    onRemove: (state, id) => {
      state.todos = state.todos.filter(todo =>
          todo.id !== id,
      );
    },
    onChange: (state, value) => {
      state.todo = value;
    },
  },
});

export default store;
