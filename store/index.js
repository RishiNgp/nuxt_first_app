import Vue from 'vue';
import Vuex from 'vuex';
//general
import login from './login';
import register from './register';
import addMenu from './addMenu';
Vue.use(Vuex);
export const strict=false;
export const store = new Vuex.Store({
    modules: {
        login,
        register,
        addMenu,

    }
});