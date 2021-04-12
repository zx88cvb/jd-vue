<template>
  <div>
    <div class="wrapper">
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
    </div>
    <div class="docker">
      <div class="docker__item docker__item--active">
        <div class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-home"></use>
          </svg>
        </div>
        <div class="docker__title">首页</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-Cart"></use>
          </svg>
        </div>
        <div class="docker__title">购物车</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-order"></use>
          </svg>
        </div>
        <div class="docker__title">订单</div>
      </div>
      <div class="docker__item">
        <div class="iconfont">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-my"></use>
          </svg>
        </div>
        <div class="docker__title">我的</div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

<style lang="scss">
@import './style/viriables.scss';
@import './style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  right: 0;
  bottom: .5rem;
  top: 0;
  padding: 0 .18rem;
}
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
.docker {
  display: flex;
  position: absolute;
  padding: 0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: .49rem;
  border-top: .01rem solid #f1f1f1;
  color: $content-fontcolor;
  &__item {
    flex: 1;
    text-align: center;
    .iconfont {
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active {
      color: #1FA4FC;
    }
  }
  &__title {
    font-size: .2rem;
    transform: scale(.5, .5);
    transform-origin: center top;
  }
}
</style>