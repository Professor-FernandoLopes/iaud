import axios from 'axios';

const api = axios.create({
    //baseURL: 'http://104.131.77.220',
    baseURL: 'http://localhost:3333'
});

export default api;
