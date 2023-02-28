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
    dishImage:state=>state.dishimage,
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
      // console.log("PayLoad",payload.dishName)
      
        state.dishname=payload.dishName
        console.log("state",state.dishname)
        state.dishprice=payload.dishPrice
        state.dishcalories=payload.dishCalories
        state.dishimage=payload.dishPhoto

        // const x= JSON.stringify(payload)
        await state.list.push(payload)
        console.log("mutation",state.list[0].dishPhoto)
        localStorage.setItem('list',JSON.stringify(payload))
    }

};
export default{
  state,
  getters,
  actions,
  mutations
};