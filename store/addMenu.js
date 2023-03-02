export const state = () => ({
  list: [],
  cart: [],
  price: 0,
});

export const getters = {
  MenuList: (state) => state.list,
  CartList: (state) => state.cart,
  Price: (state) => state.price,
};

export const actions = {
  async uploadMenu({ commit }, payload) {
    await commit("setMenu", payload);
  },

  async actionEditMenu({ commit, getters }, editData) {
    console.log(editData.dishPhoto);
    for (const key in getters.MenuList) {
      if (key == editData.itemNumber) {
        if (editData.dishName && editData.dishPrice && editData.dishPhoto) {
          await commit("setEditMenu", editData);
        } else if (editData.dishName) {
          if (editData.dishPrice) {
            if (editData.dishPhoto) {
              await commit("setEditImage", editData);
            } else {
              await commit("setEditPrice", editData);
            }
          } else {
            await commit("setEditName", editData);
          }
        } else if (editData.dishPrice) {
          if (editData.dishPhoto) {
            await commit("setEditImage", editData);
          } else {
            await commit("setEditPrice", editData);
          }
        } else if (editData.dishPhoto) {
          await commit("setEditImage", editData);
        }else{
          console.log("Empty")
        }
      }
    }
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
  //remove menu from cart
  async setRemoveItem(state, addData) {
    console.log("data", state.cart[addData.var]);
    state.cart.pop(addData);
    console.log("dataafter", state.cart);
  },
  //add menu to cart
  setaddToCart(state, addData) {
    const paylod2 = {
      cartName: addData.dishName,
      cartPrice: addData.dishPrice,
      cartCalories: addData.dishCalories,
      cartQuantity: addData.dishQuantity,
      cartImage: addData.dishPhoto,
    };
    console.log("ADDdATA", addData);
    console.log("CartbEFORE=", state.cart);
    state.cart.push(paylod2);
    console.log("Cart=", state.cart);
  },

  //for ADDING QUANTITY
  async setAddQuantity(state, addData) {
    console.log(state.cart);
    state.cart[addData.var].cartQuantity =
      parseInt(state.cart[addData.var].cartQuantity) + 1;
    state.cart[addData.var].cartPrice =
      state.list[addData.var].dishPrice * state.cart[addData.var].cartQuantity;
  },

  //for reducing quantity
  async setReduceQuantity(state, addData) {
    if (state.list[addData.var].dishQuantity > 0) {
      state.cart[addData.var].cartQuantity =
        parseInt(state.cart[addData.var].cartQuantity) - 1;
      state.cart[addData.var].cartPrice =
        parseInt(state.list[addData.var].dishPrice) *
        state.cart[addData.var].cartQuantity;
    } else {
      alert("Negative Quantity");
    }
  },
  //For adding new Item
  setMenu(state, payload) {
    const paylod1 = {
      cartName: payload.dishName,
      cartPrice: payload.dishPrice,
      cartCalories: payload.dishCalories,
      cartQuantity: payload.dishQuantity,
      cartImage: payload.dishPhoto,
    };
    state.cart.push(paylod1);
    state.list.push(payload);
    localStorage.setItem("list", JSON.stringify(payload));
  },

  //For editing menu
  async setEditMenu(state, editData) {
    state.list[editData.itemNumber].dishName = editData.dishName;
    state.list[editData.itemNumber].dishPrice = editData.dishPrice;
    state.list[editData.itemNumber].dishPhoto = editData.dishPhoto;
    state.list[editData.itemNumber].dishCalories = editData.dishCalories;
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
