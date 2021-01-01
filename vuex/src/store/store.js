import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  // state 값 리덕스의 initialState와 비슷함
  state: {
    count: 0,
  },
  getters: {
    count: state => state.count,
  },
  // 동기적인 처리를 하는 메서드를 작성
  mutations: {
    // payload, 즉 두 번째 매개변수에 데이터 받아 사용 가능
    onIncrease: state => state.count++,
    onDecrease: state => state.count--,
  },
  // 비동기 처리할 때 사용
  actions: {
    asyncIncrease: injectee =>
        setTimeout(() => {
          injectee.commit('onIncrease');
        }, 1000),
  },
});