<template>
  <div class="todo-item">
    <font-awesome-icon
        v-if="!done"
        class="todo-item__check"
        :icon="['far', 'circle']"
        @click="onToggle(id)"
    />
    <font-awesome-icon
        v-else
        class="todo-item__check"
        :icon="['far', 'check-circle']"
        @click="onToggle(id)"
    />
    <div v-if="done" class="todo-item__text isDone">{{ todo }}</div>
    <div v-else class="todo-item__text">{{ todo }}</div>
    <font-awesome-icon
        class="todo-item__remove"
        :icon="['far', 'trash-alt']"
        @click="onRemove(id)"
    />
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  name: 'TodoItem',
  props: {
    id: Number,
    todo: String,
    done: Boolean,
  },
  methods: mapMutations([
    'onToggle',
    'onRemove',
  ]),
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
}

.todo-item__check {
  width: 32px;
  height: 32px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  color: #38d9a9;
}

.todo-item__text {
  flex: 1;
  font-size: 21px;
  color: #495057;
}

.isDone {
  color: #ced4da;
}

.todo-item__remove {
  display: none;
  align-items: center;
  justify-content: center;
  color: #dee2e6;
  font-size: 24px;
  cursor: pointer;
}

.todo-item:hover .todo-item__remove {
  display: flex;
}
</style>
