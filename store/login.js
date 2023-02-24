import axios from 'axios';
export const state = () => ({
    
    username: null,
    password: null

});
export const getters = ()=>({
    isAuthenticated: state => state.username, 
    StateLoginPasswaord:state=>state.loginpassword,   

});
export const actions = {

    async Userlogin({commit},User)

    { console.log(User.get("username"))
        await commit('setUser',User);
    }

};
export const mutations = {
    async setUser(state,User){
      
        state.username=User.get('username');
        state.password=User.get('loginpassword');
        localStorage.setItem("username",User.get("username"));
        localStorage.setItem("password",User.get("loginpassword"));
    }

};
export default{
  state,
  getters,
  actions,
  mutations
};