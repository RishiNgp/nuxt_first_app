import Vue from 'vue';
import Vuex from 'vuex';
//general
import login from './login';
import register from './register';
Vue.use(Vuex);
export const store = new Vuex.Store({
    modules: {
        login,
        register

    }
});