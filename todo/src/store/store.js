import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 10,
  },
  getters: {
    count: state => state.count,
  },
  mutations: {
    onIncrease: state => state.count++,
    onDecrease: state => state.count--,
  },
  actions: {
    asyncIncrease: context =>
        setTimeout(() => {
          context.commit('onIncrease');
        }, 1000),
    asyncDecrease: context =>
        setTimeout(() => {
          context.commit('onDecrease');
        }, 1000),
  },
});

export default store;
