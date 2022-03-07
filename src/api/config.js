import axios from 'axios';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const endpoints = {
    PRODUCTS: {
        ALL: '/products',
    },
    CATEGORIES: {
        ALL: '/categories',
    }
}

export function createHttp(baseUrl = API_BASE_URL) {
    return axios.create({
        baseURL: baseUrl,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    });
}

export default createHttp();