<template>
  <div class="todo-form">
    <form
        v-if="open"
        class="todo-form__form"
        @submit="onInsert"
    >
      <input
          class="todo-form__input"
          type="text"
          placeholder="할 일을 입력하세요."
          :value="todo"
          @change="onChange($event.target.value)"
      />
    </form>
    <div
        class="todo-form__button"
        :class="{'isOpen': open}"
        @click="openToggle"
    >
      <font-awesome-icon
          :icon="['fas', 'plus-circle']"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'TodoForm',
  data() {
    return {
      open: false,
    };
  },
  computed: mapGetters([
    'todo',
  ]),
  methods: {
    ...mapMutations([
      'onInsert',
      'onChange',
    ]),
    openToggle() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
.todo-form {
  width: 100%;
  bottom: 0;
  left: 0;
}

.todo-form__form {
  background-color: #f8f9fa;
  padding: 32px 32px 72px;
  border-top: 1px solid #e9ecef;
  width: 100%;
}

.todo-form__input {
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
}

.todo-form__button {
  color: #38d9a9;
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  font-size: 60px;
  display: flex;
  position: absolute;
  bottom: 0;
  align-items: center;
  justify-content: center;
  left: 50%;
  transform: translate(-50%, 50%);
  transition: 0.125s all ease-in;
}

.todo-form__button.isOpen {
  color: #ff6b6b;
  transform: translate(-50%, 50%) rotate(45deg);
}
</style>
