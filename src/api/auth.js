import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:3000/api', // reemplaza con tu IP local real
});

export const register = async (user) => {
  const response = await API.post('/register', user);
  return response.data;
};

export const login = async (user) => {
  const response = await API.post('/login', user);
  return response.data;
};
