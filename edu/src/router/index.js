import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      // 비동기 처리
      // 코드 스플릿을 라우트 레벨에서 수행함
      import(/* webpackChunkName: "about" */ '../views/About.vue'),
  },
  {
    path: '/test1',
    name: 'Test1',
    component: () =>
      import(/* webpackChunkName: "test" */ '../views/Test1.vue'),
  },
  {
    path: '/test2',
    name: 'Test2',
    component: () =>
      import(/* webpackChunkName: "test" */ '../views/Test2.vue'),
  },
  {
    path: '/test3',
    name: 'Test3',
    component: () =>
      import(/* webpackChunkName: "test" */ '../views/Test3.vue'),
  },
];

const router = new VueRouter({
  mode: 'history', // url에 # 대신 history 모드로 설정, 대신 웹 서버에서 무조건 index를 불러오도록 변경해야 함
  base: process.env.BASE_URL,
  routes,
});

export default router;
