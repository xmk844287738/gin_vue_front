// 本地缓存服务

const PREFIX = 'ginessential_';

// user模块的常量
const USER_PREFIX = `${PREFIX}user_`;
const USER_TOKEN = `${USER_PREFIX}token`;
const USER_INFO = `${USER_PREFIX}info`;


// 储存localStorage的值
const set = (key, val) => {
  localStorage.setItem(key, val);
};

// 读取localStorage的值
const get = (key) => localStorage.getItem(key);

// 导出定义好的常量、方法
export default {
  PREFIX,
  USER_PREFIX,
  USER_TOKEN,
  USER_INFO,
  set,
  get,
};
