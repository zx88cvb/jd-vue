<template>
  <div class="wrapper">
    <div class="search">
      <div class="search__back" @click="handleBackClick">
        <svg class="icon" aria-hidden="true">
          <use :xlink:href='"#icon-back"'></use>
        </svg>
      </div>
      <div class="search__content">
        <span class="search__content__icon iconfont">
          <svg class="icon" aria-hidden="true">
            <use :xlink:href='"#icon-search"'></use>
          </svg>
        </span>
        <input
          class="search__content__input"
          placeholder="请输入商品名称"
        />
      </div>
    </div>
    <ShopInfo
      :item="item"
      :hideBorder="true"
      v-show="item.imgUrl"/>
    <Content />
    <Cart />
  </div>
</template>

<script setup>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '@/utils/request'
import ShopInfo from '@/components/ShopInfo.vue'
import Content from '@/views/shop/Content.vue'
import Cart from '@/views/shop/Cart.vue'

const router = useRouter();
const route = useRoute();

/**
 * 获取当前商品信息
 */
const useShopInfoEffect = () => {
  const data = reactive({
    item: {}
  });
  const getItemData = async () => {
  const result = await get(`/api/shop/${route.params.id}`)
    if(result?.errno === 0) {
      data.item = result.data;
    }
  }
  const { item } = toRefs(data);
  return { item, getItemData }
}

/** 点击后退 */
const useBackRouterEffect = () => {
  const handleBackClick = () => {
    router.back();
  }
  return handleBackClick;
}

const { item, getItemData } = useShopInfoEffect();
getItemData();

const handleBackClick = useBackRouterEffect();

</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  display: flex;
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    background: $search-bgColor;
    border-radius: .16rem;
    &__icon {
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      display: block;
      width: 100%;
      padding-right: .2rem;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>