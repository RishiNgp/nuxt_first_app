import Vue from "vue";
//STATE
export const state = () => ({
  list: [],
  cart: [],
  menu: [],
  getFetch: [],
  price: 0,
});

//GETTERS
export const getters = {
  OrignalList: (state) => state.list,
  MenuList: (state) => state.menu,
  CartList: (state) => state.cart,
  FormData: (state) => state.getFetch,
  Price: (state) => state.price,
};

//ACTIONS
export const actions = {
  async DeleteMenuItem({ commit }, deleteData) {
    await commit("setDeleteMenuItem", deleteData);
  },
  async uploadMenu({ commit }, payload) {
    await commit("setMenu", payload);
  },

  async actionEditMenu({ commit, getters }, editData) {
    console.log(editData)
    console.log("CONSOLE")
    if (getters.MenuList[editData.dishItemNumber]) {
      console.log("Enside Action if");
      await commit("setEditMenu", editData);
    }
  },
  // 
  async fetchItem({ commit }, editData) {
    commit("setfetchItem", editData);
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

//MUTATIONS

export const mutations = {
  //Delete Item From Menu
  async setDeleteMenuItem(state, deleteData) {
    console.log(deleteData.var);
  
    state.menu=state.menu.filter((el)=>{return el.MenuName!==deleteData.MenuName})
    state.cart=state.cart.filter((el)=>{return el.cartName!==deleteData.MenuName})
    state.list=state.list.filter((el)=>{return el.dishName!==deleteData.MenuName})
  },
  //fetch Item
  async setfetchItem(state, editData) {
    const payload3 = {
      dishItemNumber: editData.var,
      dishName: editData.MenuName,
      dishQuantity: editData.MenuQuantity,
      dishPrice: editData.MenuPrice,
      dishCalories: editData.MenuCalories,
      dishImage: state.list[editData.var].dishImage,
    };
    console.log("dishPhoto", state.list[editData.var].dishImage);
    state.getFetch = payload3;
  },

  //remove menu from cart
  async setRemoveItem(state, addData) {
    console.log(
      "data", state.cart.filter((el)=>{return el.cartName!==addData.cartName})
    );
    // state.cart.splice(
    //   state.cart.findIndex((el) => el.addData === state.cart[addData.var]),
    //   1
    // );
    state.cart=state.cart.filter((el)=>{return el.cartName!==addData.cartName})
    
    console.log("dataafter", state.cart);
  },

  //add menu to cart
  setaddToCart(state, addData) {
    const payload2 = {
      cartName: addData.MenuName,
      cartPrice: addData.MenuPrice,
      cartCalories: addData.MenuCalories,
      cartQuantity: addData.MenuQuantity,
      cartImage: addData.MenuImage,
    };
    if (state.cart.length == 0) {
      state.cart.push(payload2);
    } else {
      const Find = state.cart.find((o) => o.cartName === payload2.cartName);
      console.log("find",Find);
      if (Find) {
        alert("duplicate Item");
      } else {
        state.cart.push(payload2);
      }
    }
  },

  //for ADDING QUANTITY
  async setAddQuantity(state, addData) {
    if (
      state.cart[addData.var].cartQuantity <
      state.list[addData.var].dishQuantity
    ) {
      state.cart[addData.var].cartQuantity =
        parseInt(state.cart[addData.var].cartQuantity) + 1;
    } else {
      alert("sorry,this moment we can't take order more than that");
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
 async setMenu(state, payload) {
    const image = URL.createObjectURL(payload.dishImage);
    //Storing Data In Cart
   
    const Cart = {
      cartName: payload.dishName,
      cartPrice: payload.dishPrice,
      cartCalories: payload.dishCalories,
      cartQuantity: payload.dishQuantity,
      cartImage: image,
    };
    //Storing Data In Menu
    const Menu = {
      MenuName: payload.dishName,
      MenuPrice: payload.dishPrice,
      MenuCalories: payload.dishCalories,
      MenuQuantity: payload.dishQuantity,
      MenuImage: image,
    };
    console.log(state.list.length);
    if (state.list.length == 0) {
      state.cart.push(Cart);
      state.menu.push(Menu);
      state.list.push(payload);
    } else {
      console.log("state",state.list)
      console.log("payload",payload)
      const Find = state.menu.find((o) => o.MenuName === payload.dishName);
      console.log("FIND",Find);
      if (Find) {
        alert("duplicate Item");
      } else  {
        console.log("Inside Else")
        state.cart.push(Cart);
        state.menu.push(Menu);
        state.list.push(payload);
      }
    }
    // localStorage.setItem("list", JSON.stringify(payload));
  },
async setEditMenu(state, editData) {
 console.log("MenuData",editData.dishName);
    
  const image=URL.createObjectURL(editData.dishImage)

    const editCart = {
      CartName: editData.dishName,
      CartQuantity: editData.dishQuantity,
      CartCalories: editData.dishCalories,
      CartPrice: editData.dishPrice,
      CartImage: image,
    };
      console.log("Before Edit",state.cart);

        state.menu[editData.dishItemNumber].MenuName = editData.dishName;
        state.menu[editData.dishItemNumber].MenuPrice = editData.dishPrice;
        state.menu[editData.dishItemNumber].MenuCalories = editData.dishCalories;
        state.menu[editData.dishItemNumber].MenuQuantity = editData.dishQuantity;
        state.menu[editData.dishItemNumber].MenuImage = image;

        //Updating Cart
        if (state.cart.length == 0) {
          state.cart.push(editCart)}
          else{
        state.cart[editData.dishItemNumber].cartName = editData.dishName;
        state.cart[editData.dishItemNumber].cartPrice = editData.dishPrice;
        state.cart[editData.dishItemNumber].cartCalories = editData.dishCalories;
        state.cart[editData.dishItemNumber].cartQuantity = editData.dishQuantity;
        state.cart[editData.dishItemNumber].cartImage = image;
          }

        console.log("After Edit",state.cart[editData.dishItemNumber]);
        
        //Updating Orignal List
        state.list[editData.dishItemNumber].dishName = editData.dishName;
        state.list[editData.dishItemNumber].dishPrice = editData.dishPrice;
        state.list[editData.dishItemNumber].dishCalories = editData.dishCalories;
        state.list[editData.dishItemNumber].dishQuantity = editData.dishQuantity;
        state.list[editData.dishItemNumber].dishImage = editData.dishImage;
      }
  // },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
