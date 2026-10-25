import axios from 'axios';

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://openings-drew-resolved-sites.trycloudflare.com/api',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Bypass-Tunnel-Reminder': 'true',
        'ngrok-skip-browser-warning': 'true',
    },
});

api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default api;
