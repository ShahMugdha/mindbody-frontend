/* eslint-disable multiline-ternary */
/* eslint-disable comma-dangle */
import axios from 'axios';


//const hostname = location.hostname.split('.');
const SERVER_URL = `http://localhost:5000/sales`
  /* process.env.NODE_ENV === 'development'
  ? `http://localhost:5000/`
  : '/'; */
//const SERVER_URL = `http://localhost:5000/sales`
console.log(SERVER_URL);
const request = axios.create({
  baseURL: SERVER_URL,
  // time out on 100 milliseconds
  timeout: 10000,
});
request.interceptors.request.use(
  (config) => {
    // do something before request is sent
    if (localStorage.getItem('idtoken')) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual LOgin
      config.headers['Authorization'] = `Bearer ${localStorage.getItem(
        'idtoken'
      )}`;
      // config.headers['host'] = localStorage.getItem('user');
    }
    return config;
  },
  (error) => {
    // do something with request error
    return Promise.reject(error);
  }
);

export default request;
