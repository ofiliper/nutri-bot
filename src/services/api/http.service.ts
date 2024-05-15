import axios from "axios";

export class HttpService {
    
    private axios;

    constructor() {

        this.axios = axios.create({
            baseURL: `${process.env.API_URL}`,
        });

        // const token = localStorage.getItem("auth");

        // if (token) {
        //     if (token) {
        //         this.axios.interceptors.request.use((request) => {
        //             request.headers.Authorization = `Bearer ${token}`;

        //             return request;
        //         });
        //     }
        // }

    }

    post<T>(url: string, data: any) {
        return this.axios.post<T>(url, data);
    }

    postFile<T>(url: string, data: any) {
        return this.axios<T>({
            method: "post",
            url: url,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    get<T>(url: string, params?: any) {
        return this.axios.get<T>(url, params);
    }

    put<T>(url: string, data: any = {}) {
        return this.axios.put<T>(url, data);
    }

    putFile<T>(url: string, data: any) {
        return this.axios<T>({
            method: "put",
            url: url,
            data: data,
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    delete<T>(url: string) {
        return this.axios.delete<T>(url);
    }
}
