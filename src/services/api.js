import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// Global Config
api.defaults.headers.common[
  'Authorization'
] = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

api.defaults.headers.common['Content-Type'] = 'application/json';

export default api;
