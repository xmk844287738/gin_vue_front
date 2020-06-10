import axios from 'axios';
import storageService from '@/service/storageService';


const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000 * 50,
});


// Add a request interceptor axios拦截每次请求头
service.interceptors.request.use((config) => {
  // Do something before request is sent
  Object.assign(config.headers, { Authorization: `Bearer ${storageService.get(storageService.USER_TOKEN)}` });
  return config;
}, (error) => Promise.reject(error)); // Do something with request error


export default {
  service,
};
