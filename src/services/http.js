import axios from 'axios';

const baseURL = 'http://192.168.15.5:3000';

const instance = axios.create({
  baseURL,
});

instance.interceptors.request.use(
  config => {
    const token =
      'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MTJlNDk4MmIyMmMyYWNlYmJhMWViNyIsImlhdCI6MTY5NTczODExMn0.TVUIdcO4-ZGh8FPEk8x1GxYuFHU7ynWWROtfznE8RfI';
    config.headers.Authorization = token;
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  response => {
    console.log('Response:', response);
    return response;
  },
  error => {
    console.log('Error:', error);
    return Promise.reject(error);
  },
);

export default instance;
