import Vuex from 'vuex';

export default Vuex.createStore({
  state: {
    // 第一层级是商户的id
    cartList: {}
  },
  mutations: {
    addItemToCart(state, payload) {
      const { shopId, productId, productInfo } = payload;
      let shopInfo = state.cartList[shopId];
      if(!shopInfo) {
        shopInfo = {}
      }
      let product = shopInfo[productId];
      if(!product) {
        product = productInfo;
        product.count = 0;
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
    }
  },
  actions: {
  },
  modules: {
  }
})