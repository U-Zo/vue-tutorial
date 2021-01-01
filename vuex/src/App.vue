<template>
  <div id="app">
    <h1>Parent: {{ count }}</h1>
    <button @click="asyncIncrease">+</button>
    <button @click="onDecrease">-</button>
    <Child />
  </div>
</template>

<script>
import Child from '@/components/Child';
import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'App',
  // mapGetters를 사용하여
  components: {
    Child,
  },
  // 템플릿의 표현식은 최대한 간결하게 작성하는 것이 좋음
  // computed 속성을 활용해서 간결하게 바꿈
  // computed: {
  //   count() {
  //     return this.$store.getters.getCount;
  //   },
  // },

  // getters를 매핑할 수 있음
  // computed: mapGetters({
  //   count: 'count',
  // }),

  // 배열을 인자로 주어 getter 이름 그대로 사용 가능
  computed: mapGetters([
    'count',
  ]),

  // methods: {
  //   onIncrease() {
  //     // mutations에 정의한 속성을 꺼내려면
  //     // commit 메서드를 활용해야 함
  //     // 두 번째 매개변수에 payload에 해당하는 데이터 입력 가능
  //     this.$store.commit('onIncrease', 2);
  //   },
  //   onDecrease() {
  //     this.$store.commit('onDecrease');
  //   },
  // },

  // mapGetters와 같이 mutations도
  // mapMutations 메서드를 제공함
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
    ]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
