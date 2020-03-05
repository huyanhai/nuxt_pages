import axios from "axios";

const baseURL = "http://127.0.0.1:5000/api/";
const timeOut = 5000;
const server = axios.create({
    baseURL: baseURL,
    timeout: timeOut,
    headers: {}
});

// request拦截器
server.interceptors.request.use(
    config => {
        let token = $cookies.get("token");
        if (token) {
            config.headers["accessToken"] = token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// // response拦截器
server.interceptors.response.use(
    response => {
        if (response.data.status === 0) {
            this.$store.commit("del_token");
        }
        return response.data;
    },
    error => {
        // 返回错误
        if (error.response && error.response.data) {
            return Promise.reject(error.response.data);
        } else {
            return Promise.reject({ message: "网络错误" });
        }
    }
);

export function get(url, config = {}) {
    return server.get(url, config);
}

export function post(url, data = {}, config = {}) {
    return server.post(url, data, config);
}

export function del(url, config = {}) {
    return server.delete(url, config);
}

export function put(url, data = {}, config = {}) {
    return server.put(url, data, config);
}