import request from '@/utils/request';

// const testFunc = () => console.log('This is testFunction!');

// 用户注册
const register = ({ name, telephone, password }) => request.service.post('api/auto/register', { name, telephone, password });

// 用户登录
const login = ({ telephone, password }) => request.service.post('api/auto/login', { telephone, password });

// 获取用户信息
const userInfo = () => request.service.get('api/auto/info');


export default {
  register,
  login,
  userInfo,
};
