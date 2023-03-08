import Vue from "vue";
//STATE
export const state = () => ({
  list: [],
  cart: [],
  menu: [],
  getFetch: [],
});

//GETTERS
export const getters = {
  OrignalList: (state) => state.list,
  MenuList: (state) => state.menu,
  CartList: (state) => state.cart,
  FormData: (state) => state.getFetch,
};

//ACTIONS
export const actions = {
  //Delete Item from menu
  async DeleteMenuItem({ commit }, deleteData) {
    await commit("setDeleteMenuItem", deleteData);
  },
  //Uploding new item to menu
  async uploadMenu({ commit }, payload) {
    await commit("setMenu", payload);
  },
//Editing in uploaded item

  async actionEditMenu({ commit, getters }, editData) {
    console.log(editData)
    console.log("CONSOLE")
    if (getters.MenuList[editData.dishItemNumber]) {
      console.log("Enside Action if");
      await commit("setEditMenu", editData);
    }
  },

  //displaying data in form
  async fetchItem({ commit }, editData) {
    commit("setfetchItem", editData);
  },
  //add functionality in cart
  async addItemQuantity({ commit, getters }, addData) {
    await commit("setAddQuantity", addData);
  },
  //subtract functionality in cart
  async reduceItemQuantity({ commit }, addData) {
    console.log(addData);
    await commit("setReduceQuantity", addData);
  },
  //removing item from cart
  removeItem({ commit }, addData) {
    console.log(addData.var);
    commit("setRemoveItem", addData);
  },
  //adding item to cart on add button
  addToCart({ commit }, addData) {
    commit("setaddToCart", addData);
  },
};

//MUTATIONS
export const mutations = {

  //Delete Item From Menu
  async setDeleteMenuItem(state, deleteData) {
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
    state.getFetch = payload3;
  },

  //remove menu from cart
  async setRemoveItem(state, addData) {
  
    state.cart=state.cart.filter((el)=>{return el.cartName!==addData.cartName})
    
  },

  //add menu to cart
  setaddToCart(state, addData) {
    const payload2 = {
      cartName: addData.MenuName,
      cartPrice: addData.MenuPrice,
      cartCalories: addData.MenuCalories,
      cartQuantity: 1,
      cartImage: addData.MenuImage,
    };

    state.cart.push(payload2);
    Vue.toasted.global.success(
      {
        message:'Item added sucessfully'
      }
    );
    console.log(state.cart)
    // if (state.cart.length == 0) {
    //   state.cart.push(payload2);
    // } else {
    //   const Find = state.cart.find((o) => o.cartName === payload2.cartName);
    //   console.log("find",Find);
    //   if (Find) {
    //     alert("duplicate Item");
    //   } else {
    //     state.cart.push(payload2);
    //   }
    // }
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
    const Find=state.list.find((el)=>{return el.dishName===addData.cartName})

    state.cart[addData.var].cartPrice = Find.dishPrice * state.cart[addData.var].cartQuantity;
  },

  //for reducing quantity
  async setReduceQuantity(state, addData) {
    if (state.cart[addData.var].cartQuantity > 0) {
      state.cart[addData.var].cartQuantity =
        parseInt(state.cart[addData.var].cartQuantity) - 1;
        const Find=state.list.find((el)=>{return el.dishName===addData.cartName})
      state.cart[addData.var].cartPrice =
        Find.dishPrice *
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
      cartQuantity: 1,
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
  },

  //Update
async setEditMenu(state, editData) {
     //converting image to blob file before storing 
       const image=URL.createObjectURL(editData.dishImage)
       console.log(editData.dishItemNumber);

        state.menu[editData.dishItemNumber].MenuName = editData.dishName;
        state.menu[editData.dishItemNumber].MenuPrice = editData.dishPrice;
        state.menu[editData.dishItemNumber].MenuCalories = editData.dishCalories;
        state.menu[editData.dishItemNumber].MenuQuantity = editData.dishQuantity;
        state.menu[editData.dishItemNumber].MenuImage = image;

        //Updating Cart
        
        state.cart[editData.dishItemNumber].cartName = editData.dishName;
        state.cart[editData.dishItemNumber].cartPrice = editData.dishPrice;
        state.cart[editData.dishItemNumber].cartCalories = editData.dishCalories;
        state.cart[editData.dishItemNumber].cartQuantity = 1;
        state.cart[editData.dishItemNumber].cartImage = image;

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
