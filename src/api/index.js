import { endpoints, createHttp } from "./config";

const http = createHttp();

export class Products {
    static getAll() {
        return http.get(endpoints.PRODUCTS.ALL);
    }
}

export class Categories {
    static getAll() {
        return http.get(endpoints.CATEGORIES.ALL);
    }
}