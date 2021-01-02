<template>
  <div id="app">
    <h1>Parent {{ count }}</h1>
    <button @click="asyncIncrease">+</button>
    <button @click="onDecrease">-</button>
    <Counter
        :on-increase="onIncrease"
        :on-decrease="onDecrease"
    />
  </div>
</template>

<script>
import Counter from '@/components/Counter';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  components: {
    Counter,
  },
  // data() {
  //   return {
  //     count: 0,
  //   };
  // },
  computed: mapGetters([
    'count',
  ]),

  // methods: {
  //   onIncrease() {
  //     this.$store.commit('onIncrease');
  //   },
  //   onDecrease() {
  //     this.$store.commit('onDecrease');
  //   },
  // },
  // methods: mapMutations([
  //   'onIncrease',
  //   'onDecrease',
  // ]),
  methods: {
    ...mapMutations([
      'onIncrease',
      'onDecrease',
    ]),
    ...mapActions([
      'asyncIncrease',
      'asyncDecrease',
    ]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
