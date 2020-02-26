import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://127.0.0.1:8000',
    timeout:3000
  })
  return instance(config)
  //axios拦截器
  // 添加请求拦截器
  axios.interceptors.request.use(function (res) {
    // 在发送请求之前做些什么
    return res;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

  // 添加响应拦截器
  axios.interceptors.response.use(function (result) {
    // 对响应数据做点什么
    return result;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
}