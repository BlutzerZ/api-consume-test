import axios from "axios"

const AxiosInstance = axios.create({
    baseURL: "https://api-academic-chat.dinus.ac.id"
})

AxiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        const accessToken = JSON.parse(token);

        // If token is present, add it to request's Authorization Header
        if (accessToken) {
            if (config.headers) config.headers.token = accessToken;
        }
        return config;
    },
    (error) => {
        // Handle request errors here
        return Promise.reject(error);
    }
);

AxiosInstance.interceptors.response.use(
    (response) => {
        // Can be modified response
        return response;
    },
    (error) => {
        // Handle response errors here
        return Promise.reject(error);
    }
);