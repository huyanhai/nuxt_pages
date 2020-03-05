import Vue from "vue";
import Vuex from "vuex";
import VueCookies from "vue-cookies";

Vue.use(Vuex);
Vue.use(VueCookies);

const store = () =>
    new Vuex.Store({
        state: {
            token: ""
        },
        mutations: {
            set_token(state, token) {
                state.token = token;
                $cookies.set("token", token);
            },
            del_token(state) {
                state.token = "";
                $cookies.remove("token");
            }
        },
        actions: {
            nuxtServerInit({ commit }, { req }) {
                let cookie = req.headers.cookie;
                console.log(localStorage);
            }
        }
    });

export default store;