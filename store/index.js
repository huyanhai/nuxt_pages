import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Cookies from "js-cookie";

Vue.use(Vuex);

const store = () =>
  new Vuex.Store({
    state: {
      count: 100
    },
    mutations: {
      increment: state => state.count++,
      decrement: state => state.count--
    }
  });

export default store;
