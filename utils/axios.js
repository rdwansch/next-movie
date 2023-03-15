import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
});

// instance.get('/coba');
// https://api.themoviedb.org/3/coba

export default instance;
