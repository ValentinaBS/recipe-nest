import axios from 'axios';

export const makeRequest = axios.create({
    baseURL: 'http://localhost:8800/api/user/current',
    withCredentials: true,
});

export const configureAxiosWithToken = () => {
    const token = document.cookie.split(';').find(cookie => cookie.trim().startsWith('accessToken='))?.split('=')[1];
    if (token) {
        makeRequest.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
};