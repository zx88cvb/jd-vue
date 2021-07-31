<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <router-link v-for="item in nearByList"
      :key="item._id"
      :to="`/shop/${item._id}`">
      <ShopInfo
        :item="item" />
    </router-link>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { get } from '@/utils/request';
import ShopInfo from '@/components/ShopInfo.vue'


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

  a {
    text-decoration: none;
  }
}
</style>