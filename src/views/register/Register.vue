<template>
  <div class="wrapper">
    <img src="http://www.dell-lee.com/imgs/vue3/user.png"
      alt=""
      class="wrapper__img" />
    <div class="wrapper__input">
      <input type="text"
        class="wrapper__input__content"
        placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input type="password"
        class="wrapper__input__content"
        placeholder="请输入密码" />
    </div>
    <div class="wrapper__input">
      <input type="password"
        class="wrapper__input__content"
        placeholder="确认密码密码" />
    </div>
    <div
      class="wrapper__register-button">
    注册
    </div>
    <div class="wrapper__register-link"
      @click="handleLoginClick">已有帐号去登录
    </div>
  </div>  
</template>

<script setup>
import { useRouter } from 'vue-router';
  const router = useRouter();
  const handleLoginClick = () => {
    router.push({ name: 'Login' });
  }
</script>

<style lang="scss" scoped>
@import '@/style/viriables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    box-sizing: border-box;
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #f9f9f9;
    border: 1px solid rgba(0,0,0,0.10);
    border-radius: 6px;
    &__content {
      line-height: .48rem;
      border: none;
      outline: none;
      width: 100%;
      background: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091ff;
    box-shadow: 0 .04rem .08rem 0 rgba(0,145,255,0.32);
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__register-link {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>