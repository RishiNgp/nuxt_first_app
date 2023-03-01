
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

  async uploadMenu({ commit}, payload) {
    await commit('setMenu', payload);
  },
  async changeName({commit,getters},editData){
    for(const key in getters.MenuList){ 
    if(key==editData.itemNumber){
      await commit ('setName',editData)
      }
    }
  },
  async changePrice({commit,getters},editData){
    for(const key in getters.MenuList){ 
    if(key==editData.itemNumber){
      await commit ('setPrice',editData);
      }
    }
  },
  async changeImage({commit,getters},editData){
    for(const key in getters.MenuList){ 
    if(key==editData.itemNumber){
      await commit ('setImage',editData);
      }
    }
  },
  async addItem({commit,getters},add){
    await commit('setAdd',addData);
  }
 
};
export const mutations = {
     async setAdd(state,addData){
     const data=state.list.find(ele=>ele.id==addData.id)
     if(data){
      data.dishPrice=ele*2
     }
     },
    async setMenu(state,payload){
        await state.list.push(payload)
        localStorage.setItem('list',JSON.stringify(payload))
    },
    async setName(state,editData){
      state.list[editData.itemNumber].dishName=editData.dishName 
     },
     async setPrice(state,editData){
      state.list[editData.itemNumber].dishPrice=editData.dishPrice 
     },
     async setImage(state,editData){
      state.list[editData.itemNumber].dishPhoto=editData.dishImage 
     },

};
export default{
  state,
  getters,
  actions,
  mutations
};