<template>
  <div class="wrapper">
    <StaticPart />
    <NearBy />
  </div>
  <Docker />
</template>

<script setup>
import StaticPart from './StaticPart.vue';
import NearBy from './NearBy.vue';
import Docker from './Docker.vue';
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-y: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: .5rem;
  top: 0;
  padding: 0 .18rem .2rem .18rem;
}
</style>