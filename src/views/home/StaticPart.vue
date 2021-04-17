<template>
  <div class="position">
    <span class="iconfont position__icon">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-position"></use>
      </svg>
    </span>
    武汉理工大学武汉理工大学武汉理工大学武汉理工大学武汉理工大学
    <span class="iconfont position__notice">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bell"></use>
      </svg>
    </span>
  </div>
  <div class="search">
    <span class="iconfont">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-search"></use>
      </svg>
    </span>
    <span class="search__text">
      搜索以下
    </span>
  </div>
  <div class="banner">
    <img
      class="banner__img"
      alt="banner"
      src="http://www.dell-lee.com/imgs/vue3/banner.jpg" />
  </div>
  <div class="icons">
    <div
      v-for="(item, index) in iconList"
      :key="index"
      class="icons__item">
      <img
        :src="`http://www.dell-lee.com/imgs/vue3/${item.imgName}.png`"
        alt="img"
        class="icons__item__img" />
      <p class="icons__item__desc">{{item.desc}}</p>
    </div>
  </div>
  <div class="gap"></div>
</template>

<script setup>
  const iconList = [
    {imgName: '超市', desc: '超市便利'},
    {imgName: '菜市场', desc: '菜市场'},
    {imgName: '水果店', desc: '水果店'}
  ];
</script>

<style lang="scss" scoped>
@import '../../style/viriables.scss';
@import '../../style/mixins.scss';
.position {
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height: .22rem;
  font-size: .16rem;
  color: $content-fontcolor;
  @include ellipsis;
  &__icon {
    position: relative;
    top: .01rem;
    font-size: .2rem;
  }
  &__notice {
    position: absolute;
    right: 0;
    top: .17rem;
    font-size: .2rem;
  }
}
.search {
  margin-bottom: .12rem;
  line-height: .32rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  .iconfont {
    position: relative;
    top: .02rem;
    display: inline-block;
    padding: 0 .12rem 0 .16rem;
    font-size: .16rem;
  }
  &__text {
    display: inline-block;
    font-size: .14rem;  
  }
}
.banner {
  height: 0;
  overflow: hidden;
  padding-bottom: 25.4%;
  &__img {
    width: 100%;
  }
}
.icons {
  display: flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item {
    width: 20%;
    &__img {
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc {
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>