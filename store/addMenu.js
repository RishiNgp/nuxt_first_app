import axios from 'axios';
export const state = () => ({
  list:[],
    dishname:null,
    dishprice:null,
    dishimage:null,
    dishcalories:null,
    
});
export const getters = {
    dishName:state=>state.dishname,
    dishPrice:state=>state.dishprice,
    dishCalories:state=>state.dishcalories,
    MenuList:state=>state.list



};
export const actions = {

  async uploadMenu({ commit }, payload) {
    //console.log(payload)
    //console.log(addItem.get("dishname"));
    await commit('setMenu', payload);
  },
};
export const mutations = {
    async setMenu(state,payload){
      // state.list=payload
      // console.log(state.list)
        state.dishname=payload.dishName
        state.dishprice=payload.dishPrice
        state.list=JSON.stringify(payload)
        console.log(state.list)
        localStorage.setItem('list',JSON.stringify(payload))
    }

};
export default{
  state,
  getters,
  actions,
  mutations
};