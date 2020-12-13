import axios from 'axios';
import { api } from '../urlConfig';

const token = localStorage.getItem('token');
console.log('Token: ', token);

const axiosInstance = axios.create({
    baseURL: api,
    headers: {
        'Authorization': token ? `VoTan ${token}` : ''
    }
});

export default axiosInstance;