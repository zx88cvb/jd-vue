<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
      v-for="item in nearByList"
      :key="item._id"
      class="nearby__item">
      <img
        :src="item.imgUrl"
        alt="nearby"
        class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.name}}</div>
        <div class="nearby__content__tags">
          <span class="nearby__content__tag">月售: {{item.sales}}</span>
          <span class="nearby__content__tag">起送: {{item.expressLimit}}</span>
          <span class="nearby__content__tag">基础运费: {{item.expressPrice}}</span>
          <!-- <span
            v-for="(innerItem, innerIndex) in item.tags"
            :key="innerIndex"
            class="nearby__content__tag">{{innerItem}}</span> -->
        </div>
        <p class="nearby__content__highlight">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { get } from '@/utils/request';


const useNearByListEffect = () => {
  const nearByList = ref([]);
  // 获取列表数据
  const getNearByList = async () => {
    const result = await get('/api/shop/hot-list');
    if (result?.errno === 0) {
      nearByList.value = result.data;
    } else {
      console.error("hot-list错误");
    }
  }
  return { nearByList, getNearByList };
}
const { nearByList, getNearByList } = useNearByListEffect();
getNearByList();
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.nearby {
  &__title {
    margin: .16rem 0 .04rem 0;
    font-size: .18rem;
    font-weight: normal;
    color: $content-fontcolor;
  }
  &__item {
    display: flex;
    padding-top: .12rem;
    &__img {
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content {
    flex: 1;
    padding-bottom: .12rem;
    border-bottom: 1px solid $content-bgColor;
    &__title {
      line-height: .22rem;
      font-size: .16rem;
      color: $content-fontcolor;
    }
    &__tags {
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color: $content-fontcolor;
    }
    &__tag {
      margin-right: .16rem;
    }
    &__highlight {
      margin: .08rem 0 0 0;
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
    }
  }
}
</style>