import Vue from 'vue';
export const state = () => ({
  list: [],
  cart: [],
  menu:[],
  getFetch:[],
  price:0
});

export const getters = {
  OrignalList: (state) => state.list,
  MenuList:(state)=>state.menu,
  CartList: (state) => state.cart,
  FormData:(state)=>state.getFetch,
  Price: (state) => state.price,
};

export const actions = {
  async uploadMenu({ commit }, payload) {
    await commit("setMenu", payload);
  },

  async actionEditMenu({ commit, getters }, editData) {
    console.log("EDIT DATA",editData.MenuItemNo)
    console.log(getters.OrignalList[editData.MenuItemNo]);
 
       if (getters.MenuList[editData.MenuItemNo]) {
        console.log("Enside Action if")
        await commit('setEditMenu',editData)

        // if (editData.dishName && editData.dishPrice && editData.dishPhoto) {
        //   await commit("setEditMenu", editData);
        // } else if (editData.dishName) {
        //   if (editData.dishPrice) {
        //     if (editData.dishPhoto) {
        //       await commit("setEditImage", editData);
        //     } else {
        //       await commit("setEditPrice", editData);
        //     }
        //   } else {
        //     await commit("setEditName", editData);
        //   }
        // } else if (editData.dishPrice) {
        //   if (editData.dishPhoto) {
        //     "addMenu/MenuList"]await commit("setEditImage", editData);
        //   } else {
        //     await commit("setEditPrice", editData);
        //   }
        // } else if (editData.dishPhoto) {
        //   await commit("setEditImage", editData);
        // }else{
        //   console.log("Empty")
        // }
      
      
    }
  },
  async fetchItem({commit},editData){
    commit("setfetchItem",editData)
  },

  async addItemQuantity({ commit, getters }, addData) {
    await commit("setAddQuantity", addData);
  },
  async reduceItemQuantity({ commit }, addData) {
    console.log(addData);
    await commit("setReduceQuantity", addData);
  },
  removeItem({ commit }, addData) {
    console.log(addData.var);
    commit("setRemoveItem", addData);
  },
  addToCart({ commit }, addData) {
    commit("setaddToCart", addData);
  },
};
export const mutations = {
  //fetch Item
  async setfetchItem(state,editData){
    const payload3={
      dishItemNumber:editData.var,
      dishName:editData.MenuName,
      dishQuantity:editData.MenuQuantity,
      dishPrice:editData.MenuPrice,
      dishCalories:editData.MenuCalories,
      dishPhoto:state.list[editData.var].dishPhoto
    }
    console.log("dishPhoto",state.list[editData.var].dishPhoto)
    state.getFetch=payload3
  },
  //remove menu from cart
  async setRemoveItem(state, addData) {
    console.log("data", state.cart.findIndex(el=>el.addData===state.cart[addData.var]));
    state.cart.splice(state.cart.findIndex(el=>el.addData===state.cart[addData.var]),1)
    console.log("dataafter", state.cart);
  },
  //add menu to cart
  setaddToCart(state, addData) {
    const paylod2 = {
      cartName: addData.MenuName,
      cartPrice: addData.MenuPrice,
      cartCalories: addData.MenuCalories,
      cartQuantity: addData.MenuQuantity,
      cartImage: addData.MenuImage,
    };
    if(state.cart.length==0){
      state.cart.push(paylod2)
    }else{
      const Find= state.cart.find(o=>o.cartName===paylod2.cartName)
      if(Find.cartName===addData.MenuName){
        alert("duplicate Item")
      }else{
        state.cart.push(paylod2)
      }
    }
  },

  //for ADDING QUANTITY
  async setAddQuantity(state, addData) {
    if(state.cart[addData.var].cartQuantity<state.list[addData.var].dishQuantity){
    state.cart[addData.var].cartQuantity =
      parseInt(state.cart[addData.var].cartQuantity) + 1;}
      else{
        alert("sorry we don't have that much of Quantity")
      }
    state.cart[addData.var].cartPrice =
     state.list[addData.var].dishPrice * state.cart[addData.var].cartQuantity;
  },

  //for reducing quantity
  async setReduceQuantity(state, addData) {
    if (state.cart[addData.var].cartQuantity > 0) {
      state.cart[addData.var].cartQuantity =
        parseInt(state.cart[addData.var].cartQuantity) - 1;
      state.cart[addData.var].cartPrice =
        parseInt(state.list[addData.var].dishPrice) *
        state.cart[addData.var].cartQuantity;
    } else {
      Vue.toasted.global.negative_valu_error();
    }
  },
  //For adding new Item
  setMenu(state, payload) {
   const image = URL.createObjectURL(payload.dishPhoto);
    const cart = {
      cartName: payload.dishName,
      cartPrice: payload.dishPrice,
      cartCalories: payload.dishCalories,
      cartQuantity: payload.dishQuantity,
      cartImage: image,
    }
   
    const Menu={
     MenuName: payload.dishName,
     MenuPrice: payload.dishPrice,
     MenuCalories: payload.dishCalories,
     MenuQuantity: payload.dishQuantity,
     MenuImage: image ,

    }
    state.cart.push(cart);
    state.menu.push(Menu);
    state.list.push(payload);
    localStorage.setItem("list", JSON.stringify(payload));
  },
  async setEditMenu(state, editData) {
    const editMenu={
            MenuName: editData.MenuName,
            MenuQuantity:editData.MenuQuantity,
            MenuCalories:editData.MenuPrice,
            MenuImage:editData.MenuImage,
            MenuPrice:editData.Menuprice
    }
    state.menu[editData.MenuItemNo]=editMenu

    const editCart={
      CartName: editData.MenuName,
      CartQuantity:state.list[editData.MenuItemNo].dishQuantity,
      CartCalories:editData.MenuPrice,
      CartImage:editData.MenuImage,
      CartPrice:editData.Menuprice
}
    state.cart[editData.MenuItemNo]=editCart
  },
  async setEditName(state, editData) {
    state.list[editData.itemNumber].dishName = editData.dishName;
  },
  async setEditPrice(state, editData) {
    state.list[editData.itemNumber].dishPrice = editData.dishPrice;
  },
  async setEditImage(state, editData) {
    state.list[editData.itemNumber].dishPhoto = editData.dishPhoto;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
