import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://accounts.spotify.com/api/token',
  timeout: 1000,
  headers: {'Content-Type': 'application/x-www-form-urlencoded'}
});

export default instance;