const userRouter = [
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register/Register.vue'), // 按需 惰性加载组件
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/Login.vue'),
  },
  // 用户主页
  {
    path: '/profile',
    name: 'profile',
    meta: {
      auth: true, // 启动认证
    },
    component: () => import('@/views/profile/Profile.vue'),
  },
];

export default userRouter;
