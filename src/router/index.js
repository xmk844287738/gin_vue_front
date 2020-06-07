import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '@/store';
import userRouter from '@/router/module/userRouter';
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
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'), // 按需 惰性加载组件
  },
  ...userRouter,
  {
    path: '/posts',
    name: 'posts',
    component: () => import('../views/posts/Posts.vue'), // 按需加载
  },
  // 单篇文章
  {
    path: '/post',
    name: 'post',
    component: () => import('../views/posts/Post.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.auth) { // 判断是否要登录
    // 判断是否登录
    if (store.state.userModule.token) {
      next();
    } else { // 跳转登录页
      router.push({ name: 'login' });
    }
  } else {
    next();
  }
});

export default router;
