<template>
  <div class="mask"
    v-if="showCart"
    @click="handleCartShowChange" />
  <div class="cart">
    <div class="product" v-if="showCart">
      <div class="product__header">
        <div
          class="product__header__all"
          @click="() => setCartItemsChecked(shopId)">
          <span class="product__header__icon iconfont">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="allChecked? '#icon-xuanzhongduigou': '#icon-icons-'"></use>
            </svg>
          </span>
          全选
        </div>
        <div
          class="product__header__clear">
          <span
            class="product__header__clear__btn"
            @click="() => cleanCartProducts(shopId)">清空购物车</span>
        </div>
      </div>
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item" v-if="item.count > 0">
          <div class="product__item__checked iconfont"
            @click="() => changeCartItemChecked(shopId, item._id)">
            <svg class="icon" aria-hidden="true">
              <use :xlink:href="item.check? '#icon-xuanzhongduigou': '#icon-icons-'"></use>
            </svg>
          </div>
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{item.name}}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{item.price}}
              <span class="product__item__origin">&yen;{{item.oldPrice}}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus iconfont"
              @click="() => { changeCartItem(shopId, item._id, item, -1, shopName) }"
            >
              <svg class="icon" aria-hidden="true">
                <use :xlink:href='"#icon-minus"'></use>
              </svg>
            </span>
              {{item.count}}
            <span
              class="product__number__plus iconfont"
              @click="() => { changeCartItem(shopId, item._id, item, 1, shopName) }"
            >
              <svg class="icon" aria-hidden="true">
                <use :xlink:href='"#icon-plus"'></use>
              </svg>
            </span>
          </div>
        </div>
      </template>
    </div>
    <div class="check">
      <div class="check__icon">
        <img class="check__icon__img"
        src="http://www.dell-lee.com/imgs/vue3/basket.png"
        @click="handleCartShowChange" />
        <div class="check__icon__tag">{{total}}</div>
      </div>
      <div class="check__info">
        总计:<span class="check__info__price">&yen;{{price}}</span>
      </div>
      <div class="check__btn">
        <router-link :to="{name: 'Home'}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '@/effects/commonCartEffect.js'

const store = useStore()
const route = useRoute()

const shopId = route.params.id
const cartList = store.state.cartList



/**隐藏购物车逻辑 */
const toggleCartEffect = () => {
  // 是否展示购物车
  const showCart = ref(false)

  // 是否显示购物车
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange };
}

/**购物车相关逻辑 */
const useCartEffect = () => {
  // 改变购物车数量
  const { changeCartItem } = useCommonCartEffect();
  // 计算属性 统计商品个数
  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count;
  })

  // 统计商品价格
  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0;
    if (productList) {
      for (let i in productList) {
        const product = productList[i]
        if (product.check) {
          // 只算勾选的金额
          count += (product.count * product.price)
        }
      }
    }
    return count.toFixed(2);
  })

  // 取购物车内容
  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList;
  })

  // 全选
  const allChecked = computed(() => {
    const productList = cartList[shopId]
    let result = true;
    if (productList) {
      for (let i in productList) {
        const product = productList[i]
        if (product.count > 0 && !product.check) {
          result = false
        }
      }
    }
    return result;
  })

  // 改变勾选按钮
  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', {shopId, productId})
  }

  // 清空购物车
  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', {shopId})
  }

  // 全选按钮
  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', {shopId})
  }


  return { total, price, productList, changeCartItem, changeCartItemChecked, cleanCartProducts, setCartItemsChecked, allChecked };
}

const { total, price, productList, changeCartItem, changeCartItemChecked, cleanCartProducts, setCartItemsChecked, allChecked } = useCartEffect();

const { showCart, handleCartShowChange } = toggleCartEffect();

</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
@import '@/style/mixins.scss';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
  z-index: 1;
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  background: $bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;
  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;
    &__all {
      width: .64rem;
      margin-left: .18rem;
    }
    &__icon {
      display: inline-block;
      margin-right: .1rem;
      vertical-align: top;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__clear {
      flex: 1;
      margin-right: .16rem;
      text-align: right;
      &__btn {
        display: inline-block;
      }
    }
  }
  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;
    &__checked {
      line-height: .5rem;
      margin-right: .2rem;
      color: $btn-bgColor;
      font-size: .2rem;
    }
    &__detail {
      overflow: hidden;
    }
    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }
    &__title {
      margin: 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $content-fontcolor;
      @include ellipsis;
    }
    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $hightlight-fontColor;
    }
    &__yen {
      font-size: .12rem;
    }
    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .26rem;
      &__minus {
        position:relative;
        top: .02rem;
        color: $medium-fontColor;
        margin-right: .05rem;
      }
      &__plus {
        position:relative;
        top: .02rem;
        color: $btn-bgColor;
        margin-left: .05rem;
      }
    }
  }
}
.check {
  display: flex;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;
  line-height: .49rem;
  &__icon {
    position: relative;
    width: .84rem;
    &__img {
      display: block;
      margin: .12rem auto;
      width: .28rem;
      height: .26rem;
    }
    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $hightlight-fontColor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: #fff;
      transform: scale(.5);
      transform-origin: left center;
    }
  }
  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;
    &__price {
      line-height: .49rem;
      color: $hightlight-fontColor;
      font-size: .18rem;
    }
  }
  &__btn {
    width: .98rem;
    background-color: $btn-bgColor;
    text-align: center;
    font-size: .14rem;
    a {
      color: $bgColor;
      text-decoration: none;
    }
  }
}
</style>
