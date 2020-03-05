import * as Request from "./request";

export function registerApi(data) {
    return Request.post("register", data);
}

export function loginApi(data) {
    return Request.post("login", data);
}

export function registerTestApi() {
    return Request.get("register");
}