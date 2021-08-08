import { computed } from 'vue'
import { useStore } from 'vuex'

  /**购物车 */
export const useCommonCartEffect = () => {
  const store = useStore()
  const changeCartItem = (shopId, productId, productInfo, num) => {
    store.commit('addItemToCart', {shopId, productId, productInfo, num})
  }
  return { changeCartItem }
}