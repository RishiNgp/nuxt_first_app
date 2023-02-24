import axios from "axios";
export const state = () => ({
  firstName: null,
  lastName: null,
  email: null,
  password: null,
});
export const getters = ()=>({
  isAuthenticatedEmail(state) {
    return state.email;
  },
  StatePasswaord(state) {
    return state.password;
  },
  StateName(state) {
    return state.FirstName + state.lastName;
  },
});
export const actions = {
  async UserRegister({commit}, form) {
    // let UserForm = new FormData();
    // UserForm.append("username", form.email);
    // UserForm.append("password", form.password);
    await commit("setRegister", form);
    
  },
};
export const mutations = {
  async setRegister(state, form) {
   
    state.FirstName=form.get("firstName");
    state.lastName=form.get("lastName")
    state.username = form.get("email");
    state.password = form.get("password");
    localStorage.setItem("username", form.get("email"));
    localStorage.setItem("password", form.get("password"));
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
