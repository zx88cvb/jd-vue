import Vuex from 'vuex';

export default Vuex.createStore({
  state: {
    // 第一层级是商户的id
    cartList: {}
  },
  mutations: {
    addItemToCart(state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId] || {};
      let product = shopInfo[productId];
      if(!product) {
        productInfo.count = 0
        product = productInfo;
      }
      product.count = product.count + payload.num;
      if (product.count > 0) {
        // 选中状态
        product.check = true;
      }
      if (product.count < 0) {
        product.count = 0;
      }
      shopInfo[productId] = product;
      state.cartList[shopId] = shopInfo
    },
    // 改变购物车item选中状态
    changeCartItemChecked(state, payload) {
      const { shopId, productId } = payload;
      const product = state.cartList[shopId][productId];
      product.check = !product.check;
    },
    // 清空购物车
    cleanCartProducts(state, payload) {
      const { shopId } = payload;
      state.cartList[shopId] = {}
    },
    // 全选按钮
    setCartItemsChecked(state, payload) {
      const { shopId } = payload;
      const products = state.cartList[shopId];
      if (products) {
        for (let key in products) {
          const product = products[key];
          product.check = true;
        }
      }
    }
  },
  actions: {
  },
  modules: {
  }
})